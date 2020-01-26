import React, { Component } from 'react';
import Categories from './Categories';
import Cart from './Cart';
import Products from './Products';
import { Row, Col } from 'antd';
import { uniqueId } from 'lodash';

export class ShoppingCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesList: [
        {
            "id": 1,
            "name": "Computers",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z"
        },
        {
            "id": 2,
            "name": "Smartphones",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z"
        },
        {
            "id": 3,
            "name": "Mouses",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z"
        }
      ],
      productsList: [
        {
            "id": 1,
            "name": "APPLE MACBOOK 12.0 1.3GHZ DUAL-CORE INTEL CORE I5/8GB/512GB - GOLD",
            "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/M/R/MRQP2THA-1-1565456431.jpg",
            "description": "MacBook ได้นำประสิทธิภาพที่มากยิ่งกว่าเดิมมาใส่ลงในโน้ตบุ๊ค Mac ที่บางและเบาที่สุดเท่าที่เคยมีมา ด้วยโปรเซสเซอร์ Intel Core รุ่นที่ 7 ใหม่, จอภาพ Retina ขนาด 12 นิ้ว คีย์บอร์ดขนาดมาตรฐาน, แทร็คแพดที่สามารถรับรู้ได้ถึงแรงกด, พอร์ต USB-C อเนกประสงค์ และแบตเตอรี่ที่ใช้งานได้นานตลอดทั้งวัน เรียกได้ว่า MacBook คือการระดมความคิดครั้งใหญ่เพื่อรวบรวมทุกอย่างไว้ในรูปทรงที่กะทัดรัด",
            "price": "52100",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z",
            "ProductCategoryId": 1
        },
        {
            "id": 2,
            "name": "MICROSOFT SURFACE LAPTOP2 I7/8/256GB (LQQ-00022)",
            "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/8/8/889842385243-1-1574182877.jpg",
            "description": "Surface Laptop 2 รุ่น CPU Intel Core i7 รุ่นที่ 8 Ram ขนาด 16 GB และฮาร์ดดิสก์แบบ SSD 256 GB โน้ตบุ๊คประสิทธิภาพสูง ถ่ายโอนอ่านเขียนข้อมูลรวดเร็ว รองรับการทำงานทั่วไปได้หลากหลาย หน้าจอทัชสกรีน 13.5 นิ้ว ความละเอียดสูง ให้ภาพคมชัด สีสันงดงามเป็นธรรมชาติ รองรับการสัมผัสได้ถึง 10 จุด พร้อมกัน ใช้ระบบเสียง Dolby Audio Premium ให้เสียงทรงพลัง เหมาะสำหรับความบันเทิงทุกรูปแบบ ติดตั้ง Windows 10 พร้อมใช้งาน",
            "price": "61300",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z",
            "ProductCategoryId": 1
        },
        {
            "id": 3,
            "name": "ACER NOTEBOOK SWIFT SF314-57G-52FD GRAY",
            "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/A/c/Acer-Notebook-SWIFT-SF314-57G-52FD-Gray-1-1574270791.jpg",
            "description": "Acer Swift 3 SF314-57G-52FD โน๊ตบุ๊คดีไซน์บางเบา สไตล์เรียบง่าย ลงตัว สีเทา มากับหน้าจอ IPS Full HD 14 นิ้ว ขอบจอบางเพิ่มพื้นที่การมองเห็น ได้ภาพคมชัด สีสันสดสวย ติดตั้ง CPU Intel Core i5-1035G1,RAM LPDDR4 8GB ประสิทธิภาพดีเยี่ยม รองรับงานได้แบบหลากหลาย และมีการ์ดจอ Nvidia GeForce MX250 สำหรับทำงานกราฟิกและเล่นเกมสที่ใช้เปคไม่สูงมาก โน๊ตบุ๊ค Acer Swift 3 SF314 ยังมาพร้อม SSD M.2 PCIe 512 GB เพิ่มความเร็วให้กับการใช้งานต่างๆ ติดตั้ง Windows 10 ลิขสิทธิ์แท้ และ Microsoft Office Home & Student 2019 สินค้ามีประกันนาน 2 ปี ฟรีค่าแรง ค่าอะไหล่",
            "price": "20990",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z",
            "ProductCategoryId": 1
        },
        {
            "id": 4,
            "name": "ASUS NOTEBOOK ROG STRIX G G731GU-EV231T BLACK",
            "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/A/S/ASUS-Notebook-ROG-STRIX-G-G731GU-EV231T-Black-01-1574444159.jpg",
            "description": "",
            "price": "20990",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z",
            "ProductCategoryId": 1
        },
        {
            "id": 5,
            "name": "OPPO SMARTPHONE RENO2F NEBULA GREEN",
            "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/O/P/OPPO-Reno2F-Nebula-Green-1-1574528450.jpg",
            "description": "",
            "price": "11990",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z",
            "ProductCategoryId": 2
        },
        {
            "id": 6,
            "name": "XIAOMI MOBILE GAMING BLACK SHARK 2 PRO",
            "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/6/9/6971409201661-1-1573579408.jpg",
            "description": "Xiaomi Black Shark 2 Pro Gaming Mobile มือถือสมาร์ทโฟนชิปเซ็ต Qualcomm Snapdragon 855 Plus และ RAM 12GB ให้ประสิทธิภาพสูง ตอบสนองการเล่นเกมได้ดี ใช้ ROM แบบ UFS 3.0 อ่านเขียนข้อมูลได้รวดเร็ว ดีไซน์ตัวเครื่อง มีการเพิ่มไฟ RGB ด้านหลัง 2 จุด และมีการปรับตัวเครื่องให้จับถนัดมือมากขึ้น หน้าจอ AMOLED 6.39 นิ้ว Refresh Rate 240Hz ให้ภาพที่คมชัด ต่อเนื่อง ได้การเคลื่อนไหวของภาพที่นุ่มนวล พร้อมเซ็นเซอร์ Scan ลายนิ้วมือบนหน้าจอ ระบายความร้อน Liquid Cooling 3.0 ถ่ายเทความร้อนของตัวเครือ่งได้ดีกว่ามือถือสมาร์โฟนทั่วไป แบตเตอรี 4,000 mAh รองรับการชาร์จเร็ว 27W ได้ชั่วโมงการใช้งานที่ยาวนาน เล่นเกมได้ยาวๆ กล้องหลังคู่ 48 และ 12 ล้านพิกเซ, กล้องหน้า 20 ล้านพิกเซล",
            "price": "18900",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z",
            "ProductCategoryId": 2
        },
        {
            "id": 7,
            "name": "RAZER MOBILE GAMING PHONE 2 BLACK",
            "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/8/8/8886419355342-1-1574701254.jpg",
            "description": "Razer Phone 2 สมาร์ทโฟนสำหรับสายเกมมิ่งแบบฮาร์ดคอร์ ตอบโจทย์การเล่นเกมด้วย หน้าจอ IGZO 5.7 นิ้ว Refresh Rate 120 Hz ให้การเคลื่อนไหวที่นุ่มนวล ต่อเนื่อง ใช้ขุมพลัง Qualcomm Snapdragon 845 2.8 GHz และ Vapor Chamber ระบายความร้อนตัวเครื่องด้วยของเหลว รวมถึงโลโก้แบรนด์มีแสงไฟ RGB ปรับได้ 16.8 ล้านสี อันเป็นเอกลักษณ์เฉพาะของอุปกรณ์เกมมิ่ง ได้ระบบเสียง Dolby 5.1 Digital Surround เติมเต็มอรรถรสทางเสียงได้อย่างดี",
            "price": "16900",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z",
            "ProductCategoryId": 2
        },
        {
            "id": 8,
            "name": "APPLE IPHONE XS MAX 256GB SPACE GRAY",
            "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/1/9/190198784254-1-1572542722.jpg",
            "description": "6.5-inch Super Retina display — the largest display ever on an iPhone. Advanced Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual-camera system. iPhone XS Max is everything you love about iPhone and more.",
            "price": "38900",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z",
            "ProductCategoryId": 2
        },
        {
            "id": 9,
            "name": "LOGITECH WIRELESS MOUSE M350 PEBBLE OFFWHITE",
            "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/L/o/Logitech-Wireless-Mouse-Pebble-M350-Offwhite-1-1566926602.jpg",
            "description": "Logitech Pebble M350 เม้าส์ไร้สาย ดีไซน์โมเดิร์น ดูเรียบง่าย และไร้เสียงรบกวน สีขาว Off-White ขนาดกะทัดรัด พกพาง่าย ขนาดพอดีกระเป๋าเสื้อหรือกางเกง ให้สมาธิและความสบายขณะใช้งาน จะคลิกหรือเลื่อนก็ไร้เสียงกวนใจ Scroll Wheel ออกแบบด้วยเทคโนโลยี Micro-Precise Scrolling เหมาะสำหรับการท่องเว็บไซต์ เชื่อมต่อ Bluetooth และ ตัวรับสัญญาณ USB",
            "price": "711",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z",
            "ProductCategoryId": 3
        },
        {
            "id": 10,
            "name": "MOFII BLUETOOTH MOUSE CUTE PINK",
            "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/6/9/6950125747400-1-1572630022.jpg",
            "description": "MOFii CUTE เมาส์ไร้สายดีไซน์สุดน่ารัก สีชมพูพาสเทลหวานแหวว รูปทรงกลมมน ไม่เหมือนใคร เชื่อมต่อได้ทั้งทาง Bluetooth และ ทางตัวรับสัญญาณ Wireless ผลิตจากวัสดุชั้นดี สามารถปรับความละเอียดของเซ็นเซอร์ได้ 3 ระดับ ที่ 800dpi/ 1200dpi/ 1600dpi ใช้แบตเตอรีแบบ AA 1 ก้อน",
            "price": "590",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z",
            "ProductCategoryId": 3
        },
        {
            "id": 11,
            "name": "LOGITECH WIRELESS MOUSE M238 MARVEL COLLECTION SPIDER MAN",
            "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/9/7/97855146144-1-1572022929.jpg",
            "description": "Logitech M238 SpiderMan เมาส์ไร้สายลายสไปเดอร์แมน ฮีโร่ผู้โลดโผนแห่งค่าย Marvel ลิขสิทธิ์แท้จาก Disney และ Marvel รองรับการใช้งานได้คลอบคลุมทุกระบบปฏิบัติการ Windows และ Mac ตัวเมาส์มีขนาดกะทัดรัดพกพาสะดวก จับกระชับมือควบคุมง่าย เชื่อมต่อใช้งานได้ในระยะ 33 ฟุต ใช้แบตเตอรี AA ใช้งานได้ยาวนานถึง 12 เดือน",
            "price": "20990",
            "createdAt": "2019-11-26T23:05:09.000Z",
            "updatedAt": "2019-11-26T23:05:09.000Z",
            "ProductCategoryId": 3
        }
      ],
      cart: [],
      selectedCategoriesId: 0
    }

    this.handleCategoriesId = this.handleCategoriesId.bind(this)
    this.handleCart = this.handleCart.bind(this)
    this.handleCartRemove = this.handleCartRemove.bind(this)
  }

  handleCategoriesId(id) {
    this.setState(state => ({ ...state, selectedCategoriesId: id }));
  }

  filterProducts() {
    const id = this.state.selectedCategoriesId;
    if(id == 0) {
      return this.state.productsList;
    } else {
      return this.state.productsList.filter(product => product.ProductCategoryId == id);
    }
  }

  handleCart(product) {
    if( this.state.cart.find(cartItem => cartItem.product.id === product.id)) {
      this.setState(state => ({ ...state,
        cart: state.cart.map(cartItem => 
          cartItem.product.id === product.id ? 
            { ...cartItem, amount: cartItem.amount + 1 } : cartItem
        )
      }))
    } else {
      this.setState(state => ({ ...state, cart: [...state.cart , { uid: uniqueId(), product, amount: 1 }]}));
    }
  }

  handleCartRemove(id) {

    this.setState(state => ({
      ...state,
      cart: state.cart.filter((item) => {
        return item.uid !== id
      })
    }))
  }

  render() {
    return (
      <Row type='flex' justify='center'>
        <Col span={3}>
          <Categories categories={ this.state.categoriesList } 
          handleCategoriesIdFunc={ this.handleCategoriesId } />
        </Col>
        <Col span={13}>
          <Products products={ this.filterProducts() } handleCart={ this.handleCart }/>
        </Col>
        <Col span={6}>
          <Cart cartList={this.state.cart} handleRemove={this.handleCartRemove} />
        </Col>
      </Row>
    )
  }
}

export default ShoppingCart

