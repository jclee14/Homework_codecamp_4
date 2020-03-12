### CodeCamp 4 ###
ฺBy: ศุภวิชญ์ เจริญเวช

------

Ps1. ทำข้อ 10-18 รวมกันออกมาในรูปแบบ MVC

Ps2. ตรงโจทย์ข้อที่ 10-13 [POST method]ผมเลือกส่งค่าผ่าน body แทนที่จะผ่าน query.params (ยังสับสนว่าทำไมตัวอย่างโจทย์ข้อ 10-13 ถึงใช้ query.params คู่กับ POST method)

------

Question10: 
  POST /number/1 for saving a input number, return the all saved numbers as a JSON array. For example

Question11:
  POST /number/1 -> [1]

Question12:
  POST /number/2 -> [1,2]

Question13:
  POST /number/5 -> [1,2,5]

Question14:
  DELETE /number/1, remove the number in the array

Question15:
  DELETE /number/1 -> [2,5]

Question16:
  DELETE /number/2 → [5]

Question17:
  PUT /number/5/10, change the number in the array

Question18:
  PUT /number/5/10 -> [10]