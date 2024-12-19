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
