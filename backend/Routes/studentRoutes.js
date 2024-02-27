const router = require("express").Router();
const StudentModel = require("../Models/StudentModel");
router.post("/addStudent", async (req, res) => {
  try {
    const student = new StudentModel({
      name: req.body.name,
      class: req.body.class,
      section: req.body.section,
      rollNumber: req.body.rollNumber,
      status: req.body.status,
      gender: req.body.gender,
      dob: req.body.dob,
      admissionDate: req.body.admissionDate,
    });
    await student.save();
    res
      .status(200)
      .json({ Success: true, message: "Student data entered successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getAllStudents", async (req, res) => {
  try {
    const response = await StudentModel.find();
    res.status(200).json({ Success: true, message: "", students: response });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/updateStudent", async (req, res) => {
  const rollNo = req.body.rollNumber;
  const user = await StudentModel.findOne({ rollNumber: rollNo });
  console.log("====================================");
  console.log(user);
  console.log("====================================");
  if (user) {
    const updatedUser = await StudentModel.findOneAndUpdate(
      { rollNumber: rollNo },
      req.body.student
    );
    res.status(200).json({
      Success: true,
      message: "Student updated",
      student: updatedUser,
    });
  } else {
    res.status(404).json({ Success: false, message: "Student not found" });
  }
});

router.delete("/deleteStudent", async (req, res) => {
  const rollNo = req.body.rollNumber;
  const user = await StudentModel.findOne({ rollNumber: rollNo });
  if (user) {
    const updatedUser = await StudentModel.findOneAndDelete({
      rollNumber: rollNo,
    });
    res.status(200).json({
      Success: true,
      message: "Student deleted",
    });
  } else {
    res.status(404).json({ Success: false, message: "Student not found" });
  }
});

router.get("/notify", async (req, res) => {
  try {
    const response = await StudentModel.find();
    console.log(response);
    const feeNotPaid = response.filter((student) => {
      return student.status != "Paid";
    });
    res.status(200).json({ Success: true, message: "", students: feeNotPaid });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
