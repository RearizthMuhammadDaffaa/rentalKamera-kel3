import Kamera from "../models/MerkModels.js";
import path from "path";
import fs from "fs";
import Merk from "../models/MerkModels.js";

export const getMerk = async (req,res)=>{
  try {
    const response = await Merk.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
  
}
export const getMerkById = async (req,res)=>{

  try {
    const response = await Merk.findOne({
        where:{
          id:req.params.id
        }
      });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
  


}
export const saveMerk = (req,res)=>{
  if(req.files === null) return res.status(400).json({msg:"No Files Uploaded"})
  const name = req.body.name;
  const file = req.files.img;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 +ext;
  const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
  const allowedTypes = ['.jpg','.png','.jpeg'];
  if(!allowedTypes.includes(ext.toLowerCase())) return res.status(422).json({msg:'Invalid Images'})
  if(fileSize > 5000000) return res.status(422).json({msg:'Image Must be Less than 5MB'})

  file.mv(`./public/images/${fileName}`,async(err)=>{
    if (err) res.status(500).json({msg:err.message})
    try {
      await Merk.create({
        name:name,
        images:fileName,
        url:url,
      })
      res.status(201).json({msg:'Merk Created Succesfully'})
    } catch (error) {
      console.log(error.message);
    }
  })



}
export const updatetMerk = async(req,res)=>{
  const merk = await Merk.findOne({
    where:{
      id:req.params.id
    }
  });
  if(!merk) return res.status(404).json({msg:'no data found'})
  let fileName = "";
if(req.files === null){
  fileName = Merk.images;
}else{
  const file = req.files.img;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  fileName = file.md5 +ext;

  const allowedTypes = ['.jpg','.png','.jpeg'];
  if(!allowedTypes.includes(ext.toLowerCase())) return res.status(422).json({msg:'Invalid Images'})
  if(fileSize > 5000000) return res.status(422).json({msg:'Image Must be Less than 5MB'})
  const filepath = `./public/images/${merk.images}`;
  fs.unlinkSync(filepath)

  file.mv(`./public/images/${fileName}`,(err)=>{
    if (err) res.status(500).json({msg:err.message})  
  })
  
}
const name = req.body.name; 
  const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
  try {
    await Merk.update({
      name:name,
      images:fileName,
      url:url,
    },{
      where:{
        id:req.params.id
      }
    })
    res.status(200).json({msg:"Merk Updated Succesfully"})
  } catch (error) {
    console.log(error.message);
  }
}
export const deleteMerk = async(req,res)=>{
  const merk = await Merk.findOne({
    where:{
      id:req.params.id
    }
  });

  if(!merk) return res.status(404).json({msg:'no data found'})
  try {
    const filepath = `./public/images/${Merk.images}`;
    fs.unlinkSync(filepath)
    await Merk.destroy({
      where:{
        id:req.params.id
      }
    })
    res.status(200).json({msg:"Merk deleted Succesfully"})
  } catch (error) {
    console.log(error.message);
  }

}

export const getMerkByName = async(req,res)=>{
  try {
    const name = req.query.name;
  const response = await Merk.findAll({where:{name:name}})
  res.json(response)
  res.status(400).json({msg:'data ditemukan'})
  } catch (error) {
    console.log(error.message);
  }
  
} 

