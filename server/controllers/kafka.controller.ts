import kafka from "kafka-node";

export const KafkaController = () => {
  try {
    const Producer = kafka.Producer;
    const client = new kafka.KafkaClient({ kafkaHost: "localhost:2181" });
    const producer = new Producer(client);

    const kafka_topic = "first-topic";

    producer.on("ready", () => {
      console.log("Producer ready!!!!!!!!!");
    });

    producer.on("error", (err) => {
      console.log(err);
      console.log(
        "[kafka-producer -> " + kafka_topic + "]: connection errored"
      );
      throw err;
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
