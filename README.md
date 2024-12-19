1. index.html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quick Event Cost Alpha</title> 
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Quick Event Cost Alpha</h1> 
        <div class="tab-container">
            <button class="tab active" data-tab="1">เสนอราคา</button>
            <button class="tab" data-tab="2">ก่อนวันงาน</button>
            <button class="tab" data-tab="3">วันงาน</button>
            <button class="tab" data-tab="4">หลังงาน</button>
        </div>
        <div class="content-container">
            </div>
        <div class="summary">
            <h2>ผลสรุป</h2>
            <div id="summary-details">
                </div>
        </div>
    </div>
    <footer>
        <p>&copy; 2024 Quick Event Cost Alpha</p> 
    </footer>
    <script src="script.js"></script>
</body>
</html>

คำอธิบาย index.html
 * กำหนดชื่อเว็บไซต์เป็น "Quick Event Cost Alpha"
 * เชื่อมโยงไฟล์ CSS style.css
 * มี  <h1>  สำหรับชื่อโปรแกรม
 * มี  div  สำหรับ Tab  (tab-container)  โดย Tab แรก  (data-tab="1")  จะ Active
 * มี  div  สำหรับแสดงเนื้อหา  (content-container)
 * มี  div  สำหรับแสดงผลสรุป  (summary)  และ  div  สำหรับแสดงรายละเอียด  (summary-details)
 * มี  <footer>  สำหรับแสดงชื่อโปรแกรมและเวอร์ชั่น  (อยู่ล่างสุดของหน้าจอ)
 * เชื่อมโยงไฟล์ JavaScript  script.js
2. style.css
body {
    font-family: sans-serif;
}

.container {
    width: 80%;
    margin: 0 auto;
}

.tab-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
}

.tab {
    padding: 10px 20px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.tab.active {
    background-color: #ddd;
}

.content-container {
    /*  CSS สำหรับจัดรูปแบบเนื้อหา  */
}

/*  เพิ่ม CSS สำหรับ Accordion Menu, Input, และส่วนอื่นๆ  */

footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #f0f0f0;
    text-align: center;
    font-size: 12px; 
    padding: 5px 0;
}

คำอธิบาย style.css
 * กำหนด  font  พื้นฐานของเว็บไซต์
 * กำหนดความกว้างของ  container  และจัดให้อยู่กึ่งกลาง
 * จัดรูปแบบ  Tab  ให้เรียงกัน  (display: flex)  และมีระยะห่าง  (justify-content: space-around)
 * กำหนด  CSS  สำหรับ  Tab  ที่  Active  (.tab.active)
 * (สามารถเพิ่ม  CSS  สำหรับ  Accordion Menu, Input  และส่วนอื่นๆ ได้)
 * กำหนด  CSS  สำหรับ  footer  ให้อยู่ด้านล่างของหน้าจอ  (position: fixed)  และกำหนดขนาดตัวอักษรให้เล็ก
3. script.js
//  ฟังก์ชันสำหรับจัดการ Tab
const tabs = document.querySelectorAll('.tab');
const contentContainer = document.querySelector('.content-container');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        //  ลบ class 'active' จาก Tab เก่า
        document.querySelector('.tab.active').classList.remove('active');
        //  เพิ่ม class 'active' ให้ Tab ใหม่
        tab.classList.add('active');
        //  โหลดเนื้อหาของ Tab ที่เลือก
        loadTabContent(tab.dataset.tab);
    });
});

function loadTabContent(tabNumber) {
    //  ใช้  fetch  หรือ  XMLHttpRequest  เพื่อโหลดเนื้อหา HTML ของแต่ละ Tab
    //  เช่น  fetch(`tab${tabNumber}.html`)  แล้วนำ HTML ไปใส่ใน  contentContainer
    //  ...  (โค้ดสำหรับโหลดเนื้อหา HTML)  ...

    //  สร้างฟอร์มสำหรับรับค่าใช้จ่าย
    createCostForm(tabNumber);

    //  คำนวณผลลัพธ์
    calculateSummary();
}

function createCostForm(tabNumber) {
    //  สร้างฟอร์ม HTML  โดยใช้  DOM manipulation
    //  ...  (โค้ดสำหรับสร้างฟอร์ม)  ...

    //  เพิ่ม Event Listener  สำหรับ  input  เพื่อคำนวณผลลัพธ์แบบ Real-time
    //  ...  (โค้ดสำหรับ Event Listener)  ...
}

function calculateSummary() {
    //  คำนวณผลลัพธ์  และแสดงใน  summary-details
    //  ...  (โค้ดสำหรับคำนวณผลลัพธ์)  ...
}

//  โหลด Tab แรกเมื่อเริ่มต้น
loadTabContent('1');

//  ฟังก์ชันสำหรับบันทึกค่าใน Local Storage
function saveFormData() {
    //  ...  (โค้ดสำหรับบันทึกค่า)  ...
}

//  ฟังก์ชันสำหรับโหลดค่าจาก Local Storage
function loadFormData() {
    //  ...  (โค้ดสำหรับโหลดค่า)  ...
}

//  เรียกใช้  saveFormData  เมื่อมีการเปลี่ยนแปลงค่าในฟอร์ม
//  เรียกใช้  loadFormData  เมื่อโหลดหน้าเว็บ

คำอธิบาย script.js
 * เลือก  Tab  ทั้งหมด  (querySelectorAll)  และ  content-container
 * วนลูป  Tab  เพื่อเพิ่ม  Event Listener  เมื่อคลิก
   * ลบ  class  active  จาก  Tab  เดิม
   * เพิ่ม  class  active  ให้  Tab  ใหม่
   * เรียกใช้  loadTabContent  เพื่อโหลดเนื้อหา
 * loadTabContent  รับหมายเลข  Tab  แล้ว
   * โหลดเนื้อหา  HTML  (ต้องเขียนโค้ดเพิ่ม)
   * เรียกใช้  createCostForm  เพื่อสร้างฟอร์ม
   * เรียกใช้  calculateSummary  เพื่อคำนวณผลลัพธ์
 * createCostForm  สร้างฟอร์ม  (ต้องเขียนโค้ดเพิ่ม)  และเพิ่ม  Event Listener  (ต้องเขียนโค้ดเพิ่ม)
 * calculateSummary  คำนวณผลลัพธ์  (ต้องเขียนโค้ดเพิ่ม)
 * โหลด  Tab  แรก  (loadTabContent('1'))
 * มีฟังก์ชัน  saveFormData  และ  loadFormData  สำหรับ  Local Storage  (ต้องเขียนโค้ดเพิ่ม)
สิ่งที่ต้องทำเพิ่มเติมใน  script.js
 * เขียนโค้ดสำหรับโหลดเนื้อหา  HTML  ใน  loadTabContent
 * เขียนโค้ดสำหรับสร้างฟอร์ม  ใน  createCostForm
 * เขียนโค้ดสำหรับเพิ่ม  Event Listener  ใน  createCostForm
 * เขียนโค้ดสำหรับคำนวณผลลัพธ์  ใน  calculateSummary
 * เขียนโค้ดสำหรับบันทึกและโหลดค่าจาก  Local Storage  ใน  saveFormData  และ  loadFormData
การอัปโหลดขึ้น GitHub
 * สร้าง Repository  ใหม่บน GitHub
 * Clone Repository  ลงเครื่อง
 * สร้างไฟล์  index.html, style.css, script.js  และใส่โค้ด
 * Commit  และ  Push  โค้ดขึ้น GitHub
เพิ่มเติม
 * ควรเขียน  README.md  เพื่ออธิบายโปรแกรม
 * ควรแบ่งโค้ด  JavaScript  เป็นไฟล์ย่อยๆ  เพื่อให้ง่ายต่อการจัดการ
 * ควรใช้  Linter  และ  Formatter  เพื่อให้โค้ดเป็นระเบียบ
 * ควรทดสอบโค้ดบน  Browser  ต่างๆ
หวังว่าโค้ดและคำอธิบายนี้จะเป็นประโยชน์นะครับ  ขอให้การอัปโหลดขึ้น GitHub  ราบรื่น!
