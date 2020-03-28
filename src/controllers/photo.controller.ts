import { Request, Response } from 'express';
import Photo from '../models/Photo';
import path from 'path';
import fs from 'fs-extra';


//get photos function
export async function getPhotos(req: Request, res: Response) {
    const photos = await Photo.find();
    res.json(photos)
}

// get fotho:id
export async function getId(req: Request, res: Response) {
    const id = req.params.id;
    const photo = await Photo.findById(id)   //<- similar to Ruby on rails :) 
    return res.json(photo);
}

//delete photos funtion
export async function deletePhoto(req: Request, res: Response) {
    const id = req.params.id;
    const photoDelete = await Photo.findByIdAndRemove(id);
    if (photoDelete) {
        await fs.unlink(path.resolve(photoDelete.imagePath))
    }
    return res.json({
        message: 'delete photo',
        photoDelete
    });
}


//create photos funtion
export async function createPhoto(req: Request, res: Response) {
    const { title, description } = req.body;
    console.log(req.file.path)
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path
    };
    const photo = new Photo(newPhoto);
    console.log(photo);
    await photo.save();

    return res.json({
        message: 'Photo successfully saved',
        photo
    })
}

//update photo funtion
export async function updatePhoto(req: Request, res: Response) {
    const { title, description } = req.body;
    const id = req.params.id;
    const updatePhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    }, { new: true });
    return res.json({
        message: 'Photo Update',
        updatePhoto
    })
}