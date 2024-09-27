import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

export async function POST(req) {
  // const myS3client = new S3Client({
  //   region: '',
  //   credentials: {
  //     accessKeyId: process.env.S3_ACCESS_KEY,
  //     secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  //   },
  // });

  // console.log(req);
  // The data passed from the client as FormData is received as multipart/form-data on the server. The req.formData() method, in environments where it's available, converts this multipart/form-data back into a FormData object, which is why you see it in a similar structure on the server side.

  const formData = await req.formData();
  // req.FormData() does not exist in node js or in next js routes FormData is a web api that only exists in the browser env. not on th server side on server side req is and instance of the incoming request it soesnt have a FormData method route handlers provides the formData use formidable or multer
  console.log('form data', formData);

  for (const fileInfo of formData) {
    // FILEINFO HAS THE NUMBER OF FILES IN THE FORMDATA AND CONSEQUENTLY LOOP OVER THEM
    // IN WHICH IT HAS ARRAY OF STRING IN FIRST INDEX AND SECOND HAS OBJECT
    // console.log({ file, name: file.name });
    console.log('FILE INFO', fileInfo);

    const file = fileInfo[1];
    console.log('FILE INFO 0', fileInfo[0], 'FILE INFO 1', fileInfo[1]);

    const name = Date.now().toString() + file.name;
    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }
    console.log('CHUNKS', chunks);

    const buffer = Buffer.concat(chunks);

    // await myS3client.send(
    //   new PutObjectCommand({
    //     Bucket: 'feedback-boards-uploads',
    //     Key: name,
    //     ACL: 'public-read',
    //     // we cannot send file as the file object but as the stream or array or array buffer
    // Body: buffer ,
    //     ContentType: file.type,
    //     // like image jpg or png
    //   })
    // );
    console.log('https://feedback-boards-uploads.s3.amazonaws.com/' + name);
    // all the logs are shown in the terminal
  }
  // console.log(formData);
  return Response.json('ok');
}
