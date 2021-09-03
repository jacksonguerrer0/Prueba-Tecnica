export const deleteProduct = (products, id) => {
    let resultDelete = products.filter(ele => ele.id !== id)
    return resultDelete
} 
export const fileUrlCloudinary = async (file) => {
    const cluodUrl = 'https://api.cloudinary.com/v1_1/jackga/image/upload'
    const fromData = new FormData();
    fromData.append('upload_preset', 'pruebaTrabajo');
    fromData.append('file', file);
        const options ={
            method:'POST',
            body: fromData
        };
        let resp = await fetch(cluodUrl, options)
        if(resp.ok){
              const cluodRes = await resp.json()
              console.log(cluodRes)
              return cluodRes.secure_url;
        }
}
export const addProduct = (products, title, image) => {
    // let image =  await fileUrlCloudinary(file)
    // console.log(image)
    console.log(image, title)

    let newProducts = [
        ...products,
        {
            title, image
        }
    ]
    return newProducts
}

