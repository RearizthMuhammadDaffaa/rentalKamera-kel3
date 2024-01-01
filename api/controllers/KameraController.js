import Kamera from "../models/KameraModels.js";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export const getKamera = async (req,res)=>{
  try {
    const response = await Kamera.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
  
}
export const getKameraById = async (req,res)=>{

  try {
    const response = await Kamera.findOne({
        where:{
          id:req.params.id
        }
      });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
  


}
export const saveKamera = (req,res)=>{
  if(req.files === null) return res.status(400).json({msg:"No Files Uploaded"})
  const name = req.body.name;
  const hoursPrice = req.body.hPrice;
  const daysPrice = req.body.dPrice; 
  const cinemacam = req.body.cinemacam; 
  const battery = req.body.battery; 
  const lens = req.body.lens; 
  const merk = req.body.merk; 
  const file = req.files.img;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const uniqueFilename = uuidv4();
  const fileName = `${uniqueFilename}${ext}`;
  const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
  const allowedTypes = ['.jpg','.png','.jpeg'];
  if(!allowedTypes.includes(ext.toLowerCase())) return res.status(422).json({msg:'Invalid Images'})
  if(fileSize > 5000000) return res.status(422).json({msg:'Image Must be Less than 5MB'})

  file.mv(`./public/images/${fileName}`,async(err)=>{
    if (err) res.status(500).json({msg:err.message})
    try {
      await Kamera.create({
        name:name,
        images:fileName,
        url:url,
        hoursPrice:hoursPrice,
        daysPrice:daysPrice,
        cinemacam:cinemacam,
        lens:lens,
        battery:battery,
        merk:merk
      })
      res.status(201).json({msg:'Kamera Created Succesfully'})
    } catch (error) {
      console.log(error.message);
    }
  })



}
export const updatetKamera = async(req,res)=>{
  const kamera = await Kamera.findOne({
    where:{
      id:req.params.id
    }
  });
  if(!kamera) return res.status(404).json({msg:'no data found'})
  let fileName = "";
if(req.files === null){
  fileName = Kamera.images;
}else{
  const file = req.files.img;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  fileName = file.md5 +ext;

  const allowedTypes = ['.jpg','.png','.jpeg'];
  if(!allowedTypes.includes(ext.toLowerCase())) return res.status(422).json({msg:'Invalid Images'})
  if(fileSize > 5000000) return res.status(422).json({msg:'Image Must be Less than 5MB'})
  const filepath = `./public/images/${kamera.images}`;
  fs.unlinkSync(filepath)

  file.mv(`./public/images/${fileName}`,(err)=>{
    if (err) res.status(500).json({msg:err.message})  
  })
  
}
const name = req.body.name;
  const hoursPrice = req.body.hPrice;
  const daysPrice = req.body.dPrice; 
  const cinemacam = req.body.cinemacam; 
  const battery = req.body.battery; 
  const lens = req.body.lens; 
  const merk = req.body.merk; 
  const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
  try {
    await Kamera.update({
      name:name,
      images:fileName,
      url:url,
      hoursPrice:hoursPrice,
      daysPrice:daysPrice,
      cinemacam:cinemacam,
      lens:lens,
      battery:battery,
      merk:merk
    },{
      where:{
        id:req.params.id
      }
    })
    res.status(200).json({msg:"Kamera Updated Succesfully"})
  } catch (error) {
    console.log(error.message);
  }
}
export const deleteKamera = async(req,res)=>{
  const kamera = await Kamera.findOne({
    where:{
      id:req.params.id
    }
  });

  if(!kamera) return res.status(404).json({msg:'no data found'})
  try {
    const filepath = `./public/images/${kamera.images}`;
    fs.unlinkSync(filepath)
    await Kamera.destroy({
      where:{
        id:req.params.id
      }
    })
    res.status(200).json({msg:"Kamera deleted Succesfully"})
  } catch (error) {
    console.log(error.message);
  }

}

export const getKameraByName = async(req,res)=>{
  try {
    const name = req.query.name;
  const response = await Kamera.findAll({where:{name:name}})
  res.json(response)
  res.status(400).json({msg:'data ditemukan'})
  } catch (error) {
    console.log(error.message);
  }
  
} 

export const getKameraByMerk = async(req,res)=>{
  try {
    const merk = req.query.merk;
  const response = await Kamera.findAll({where:{merk:merk}})
  res.json(response)
  res.status(400).json({msg:'data ditemukan'})
  } catch (error) {
    console.log(error.message);
  }
  
} 

export const countByMerk = async (req,res)=>{
  const merk = req.query.merk
  try {
    const response = await Kamera.count({
      where:{
        merk:merk
      }
      
    })
  res.json(response)
  res.status(200).json({msg:'data berhasil didapat'})
  } catch (error) {
    console.log(error.message);
  }
}