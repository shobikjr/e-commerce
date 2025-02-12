import { Request, Response } from "express";
import Brand from "../models/brand";

const handleGetAllBrands = async (req: Request, res: Response) => {
    const allBrands = await Brand.find({})
    res
        .status(200)
        .json(allBrands);
}
const handleCreateBrand = async (req: Request, res: Response) => {
    console.log("adding");
    const brand = req.body;
    console.log(brand);
    if (!brand.name) {
        res.status(400).json({ msg: 'Brand name is required' });
        return
    }
    const newBrand = await Brand.create({
        name: brand.name,
        description: brand.description
    })

    res.status(201).json(
        { msg: `${newBrand.name} has been created` }
    )
}

const handleGetBrandById = async (req: Request, res: Response) => {
    const brandId = req.params.id;
    const brand = await Brand.findById(brandId)
    res
        .status(200)
        .json(brand);
}

const handleDeleteBrandById = async (req: Request, res: Response) => {
    try {

        const brandId = req.params.id;
        const result = await Brand.findByIdAndDelete(brandId)
        if (result === null) {
            res.status(400).json({ msg: 'No brand found' });
            return
        }
        res.status(200)
            .json({ msg: `brand ${result._id} has been deleted` })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
}

const handleUpdateBrandById = async (req: Request, res: Response) => {
    const brandId = req.params.brandId;
    await Brand.findByIdAndUpdate(brandId, req.body)
    res.status(200)
        .json({ msg: `brand ${brandId} has been updated` })
}

export {
    handleCreateBrand,
    handleDeleteBrandById,
    handleGetAllBrands,
    handleGetBrandById,
    handleUpdateBrandById
};

