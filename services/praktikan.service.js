const { databaseQuery } = require('../database');

const getPraktikans = async () => {
    try {
        const query = `SELECT * FROM praktikan_webdev`;
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getPraktikanByName = async (nama) => {
    try {
        const query = `SELECT * FROM praktikan_webdev WHERE "nama"='${nama}'`;
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const getPraktikanByEmailnPhone = async (email,telepon) => {
    try {
        const query = `SELECT * FROM praktikan_webdev WHERE "email"='${email}' and "telepon"='${telepon}'`;
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const patchPraktikanByName = async (nama,jenis_kelamin, angkatan, email,telepon,deskripsi) => {
    try {
        const query = `UPDATE praktikan_webdev SET "jenis_kelamin" = '${jenis_kelamin}', "angkatan"='${angkatan}',"email"='${email}', "telepon"='${telepon}', "deskripsi"='${deskripsi}' WHERE "nama"='${nama}'`;
        const result = await databaseQuery(query);
        if (!result) {
            throw new Error('Error updating Data');
        }
        if (result.rowCount === 0) {
            throw new Error('Data not found');
        }
        return {
            message: 'Data updated successfully',
        };

    } catch (error) {
        return error
    }
}

const deletePraktikanByEmail = async (email) => {
    try {
        const query = `DELETE FROM praktikan_webdev WHERE "email"='${email}'`;
        const result = await databaseQuery(query);
        if (!result) {
            throw new Error('Error deleting Data');
        }
        if (result.rowCount === 0) {
            throw new Error('Data not found');
        }
        return {
            message: 'Data deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}

const createPraktikan = async (nama,jenis_kelamin,angkatan,email,telepon,deskripsi) => {
    try {
        const query = `insert into praktikan_webdev values ('${nama}','${jenis_kelamin}','${angkatan}','${email}','${telepon}','${deskripsi}')`;
        const result = await databaseQuery(query);
        if (!result) {
            throw new Error('Error inserting Data');
        }
        return {
            message: 'Data inserred successfully',
        };

    } catch (error) {
        return error
    }
}

const createBulkInsertPraktikan = async (take) => {
    try {
        let arrstring = []
        JSON.parse(take,(a,b)=>{arrstring.push(b)})
        for (let a=0;a<(arrstring.length-1)/7;a++){
            const query = `insert into praktikan_webdev values ('${arrstring[a*7]}','${arrstring[(a*7)+1]}','${arrstring[(a*7)+2]}','${arrstring[(a*7)+3]}','${arrstring[(a*7)+4]}','${arrstring[(a*7)+5]}')`;
            const result = await databaseQuery(query);
            if (!result) {
                throw new Error('Error Inserting Data');
            }
            if (result.rowCount === 0) {
                throw new Error('Data not found');
            }   
        }
        return {
            message: 'Data inserted successfully',
        };
        
    } catch (error) {
        return error
    }
}

module.exports =  {
    getPraktikans,
    getPraktikanByName,
    getPraktikanByEmailnPhone,
    patchPraktikanByName,
    deletePraktikanByEmail,
    createPraktikan,
    createBulkInsertPraktikan
}