const {praktikanServices} = require('../services')
const {responseHelper} = require('../helper')

const getPraktikans = async (req,res) => {
    try{
        const praktikans = await praktikanServices.getPraktikans();
        if(praktikans instanceof Error) {
            throw new Error(praktikans)
        }
        res.status(responseHelper.status.success).json(praktikans)
    } catch(error){
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getPraktikanByName = async (req,res) => {
    try{
        const {nama} = req.body;
        const praktikan = await praktikanServices.getPraktikanByName(nama);
        res.status(responseHelper.status.success).json(praktikan);
    } catch(error){
        res.status(responseHelper.status.error).json(error.message)
    }
}
const getPraktikanByEmailnPhone = async (req,res) => {
    try{
        const {email,telepon} = req.body;
        const praktikan = await praktikanServices.getPraktikanByEmailnPhone(email,telepon);
        res.status(responseHelper.status.success).json(praktikan);
    } catch{
        res.status(responseHelper.status.error).json(error.message);
    }
}
const patchPraktikanByName = async (req, res) => {
    try{
        const {nama, jenis_kelamin, angkatan, email, telepon, deskripsi} = req.body;
        const praktikan = await praktikanServices.patchPraktikanByName(nama, jenis_kelamin, angkatan, email, telepon, deskripsi);
        if(praktikan instanceof Error) {
            throw new Error(praktikan)
        }
        res.status(responseHelper.status.success).json(praktikan);
    } catch(error){
        res.status(responseHelper.status.error).json(error.message);
    }
}
const deletePraktikanByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const praktikan = await praktikanServices.deletePraktikanByEmail(email);
        
        res.status(responseHelper.status.success).json(praktikan);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const createPraktikan = async (req, res) => {
    try {
        const { nama, jenis_kelamin, angkatan, email, telepon, deskripsi } = req.body;
        const praktikan = await praktikanServices.createPraktikan(nama, jenis_kelamin, angkatan, email, telepon, deskripsi);
        
        if(praktikan instanceof Error) {
            throw new Error(praktikan);
        }

        res.status(responseHelper.status.success).json(praktikan);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const createBulkInsertPraktikan = async (req, res) => {
    try {
        const url = await praktikanServices.createBulkInsertPraktikan(JSON.stringify(req.body));
        
        if(url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports = {
    getPraktikans,
    getPraktikanByName,
    getPraktikanByEmailnPhone,
    patchPraktikanByName,
    deletePraktikanByEmail,
    createPraktikan,
    createBulkInsertPraktikan
}