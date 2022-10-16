export const Env = {
  messageBrokerAddress: process.env['RABBITMQ_ADDRESS'] || 'amqps://b-4a2daddb-b41f-4300-8a32-cd29dcb45bca.mq.us-east-2.amazonaws.com:5671'
  /*messageBrokerAddress: process.env['RABBITMQ_ADDRESS'] || 'amqp://guest:guest@localhost:5672'*/

}
