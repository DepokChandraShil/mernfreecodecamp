import express from 'express';
import { Form } from '../models/formModel.js';

const router = express.Router();

router.post('/',async(request,response)=>{
  try  {
    if(!request.body.name ||
      !request.body.email||
      !request.body.password||
      !request.body.confirmPassword){
      return response.status(400).send({message:"please provide data"});
    }
    const newForm={
      name:request.body.name,
      email:request.body.email,
      password:request.body.password,
      confirmPassword:request.body.confirmPassword
    }
    const form=await Form.create(newForm);
    return response.status(200).send(form);
  }
   catch (e) {
    console.log(e.message);
    response.status(500).send({message:e.message})
  }
})
router.get('/',async(request,response)=>{
  try {
    const forms=await Form.find({});
    return response.status(200).send(forms);
  }
   catch (e) {
    console.log(e.message);
    response.status(500).send({message:e.message})
  }
})

router.get('/:id',async(request,response)=>{
  try {
  
    const {id}=request.params;
    const form=await Form.findById(id);
    return response.status(200).send(form);
  }
   catch (e) {
    console.log(e.message);
    response.status(500).send({message:e.message})
  }
})
router.put('/:id',async(request,response)=>{
  try {
    if(!request.body.name ||
      !request.body.email||
      !request.body.password||
      !request.body.confirmPassword){
      return response.status(400).send({message:"please provide data"});
    }
    const {id}=request.params;
    const result=await Form.findByIdAndUpdate(id,request.body);
    if(!result){
      return response.status(404).json({message:"Book not found"});
    }
    return response.status(200).send({message:"Book updated successfully"});
  }
   catch (e) {
    console.log(e.message);
    response.status(500).send({message:e.message})
  }
})
router.delete('/:id',async(request,response)=>{
  try {
    const {id}=request.params;
    const result=await Form.findByIdAndDelete(id);
    if(!result){
      return response.status(404).json({message:"Book not found"});
    }
    return response.status(200).send({message:"Book updated successfully"});
  }
   catch (e) {
    console.log(e.message);
    response.status(500).send({message:e.message})
  }
})


export default router;
