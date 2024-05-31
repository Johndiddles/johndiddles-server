const WakeUpCron = async (req, res) => {
  console.log("wake up, buddy");

  res.status(200).json({ status: "success" });
};

module.exports = { WakeUpCron };
