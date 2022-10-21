/*import {amqp} from "amqplib/callback_api";

amqp.connect('amqps://b-4a2daddb-b41f-4300-8a32-cd29dcb45bca.mq.us-east-2.amazonaws.com:5671',(err,connection)=>{
  if(err){
    throw err;
  }
  connection.createChannel((err,channel)=>{
    if(err){
      throw err;
    }
    let queueName = "vaticinio";
    let message = "this is a test";
    channel.assertQueue(queueName,{
      durable:false
    });
    channel.sendToQueue(queueName,Buffer.from(message));
    setTimeout(()=>{
      connection.close();
    },1000)
  })


})*/

//console.log("funciona");
