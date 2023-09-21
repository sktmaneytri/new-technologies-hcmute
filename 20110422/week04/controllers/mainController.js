// controllers/mainController.js
const mygroup = require("../models/mygroup");

const getMyGroup = (req, res) => {
  res.json(mygroup);
};

const addToMyGroup = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  // Kiểm tra điều kiện để thêm thành viên vào mygroup
  if (body.id === id && !mygroup.find(item => item.id === id)) {
    mygroup.push(body);
    res.json({ success: "Add new student successfully!" });
  } else {
    res.json({ error: "Not valid" });
  }
};

const getMessage = (req, res) => {
  const { id } = req.params;

  if (id) {
    const student = mygroup.find(item => item.id === id);
    if (student) {
      res.json(student);
    } else {
      res.json({ error: "Not valid" });
    }
  } else {
    // Trả về tên tất cả sinh viên trong mygroup
    const studentNames = mygroup.map(item => item.name);
    res.json(studentNames);
  }
};

const getMessageHTML = (req, res) => {
  const { id } = req.params;

  if (id) {
    const student = mygroup.find(item => item.id === id);
    if (student) {
      // Trả về HTML dưới dạng form
      const htmlResponse = `
          <html>
            <body>
              <ul>
                <li>${student.name}</li>
              </ul>
            </body>
          </html>
        `;
      res.send(htmlResponse);
    } else {
      res.send("Not valid");
    }
  } else {
    // Trả về tên tất cả sinh viên trong mygroup
    const studentNames = mygroup.map(item => item.name);
    const htmlResponse = `
        <html>
          <body>
            <ul>
              ${studentNames.map(name => `<li>${name}</li>`).join("")}
            </ul>
          </body>
        </html>
      `;
    res.send(htmlResponse);
  }
};

module.exports = { getMyGroup, addToMyGroup, getMessage, getMessageHTML };