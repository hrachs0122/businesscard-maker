class ImageUploader {
    async upload(file) { // async 적용하면 promise가 리턴이 됨... 
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "pdzaoz52");
        const result = await fetch(
            'https://api.cloudinary.com/v1_1/drqni4rhj/upload',
        {
            method: "POST",
            body: data,
        });
        return await result.json();
    }
}

export default ImageUploader;