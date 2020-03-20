### CodeCamp 4 ###
ฺBy: ศุภวิชญ์ เจริญเวช

Question11:
  อ่าน React Documentation ในส่วน “Main Concepts” ข้อที่ 1-4 
  เขียนสรุปส่งเป็น readme.md Upload ผ่าน github

    1.Hello World
      React เป็นหนึ่งใน library ของ Javascript ดังนั้นการมีพื้นฐาน Javascript ที่ดีจะทำให้การเรียนรู้ React เป็นไปอย่างมีประสิทธิภาพ

      โดยโค้ดด้านใต้คือตัวอย่างของ React อย่างง่าย

        ReactDOM.render(
          <h1>Hello, world!</h1>,
          document.getElementById('root')
        );
      
      ซึ่งโค้ดนี้จะแสดงข้อความ “Hello, world!” ใน <h1> tag ออกบนหน้าจอ
      จากการสำรวจตัวอย่างโค้ด จะเห็นได้ว่าฟังก์ชั่น render ของ ReactDOM สามารถส่ง html code เข้าไปยัง 'root' DOM ได้โดยที่เขียน html code ได้ใน Javascript เลย

    -----

    2.Introducing JSX
      
        ตัวอย่างด้านใต้นี้คือ JSX (แต่ JSX ที่เราเห็นนี้จะไม่ใช่ทั้ง HTML และ String!)

          const element = <h1>Hello, world!</h1>;

        อธิบายเพิ่มเติม JSX คือส่วนขยายของ syntax สำหรับ Javascript โดยมักจะถูกใช้ควบคู่กับ React จุดประสงค์เพื่อกำหนดว่า UI จะออกมาหน้าตาอย่างไร อย่างที่กล่าวไว้ว่า ถึงแม้ JSX จะมีหน้าตาเหมือน HTML แต่มันมีคุณสมบัติของความเป็น Javascript อย่างเต็มเปี่ยม

        JSX จะสร้าง "elements" ของ React

        *ทำไมต้องใช้ JSX?*
        เกริ่นก่อนว่าแท้จริงแล้ว logic การเรนเดอร์ของ React นั้นมีความเชื่อมโยงกับ logic ของ UI ตัวอื่น ๆ ทั้งเรื่องการจัดการ events การเปลี่ยนแปลง state ในช่วงเวลาต่าง ๆ และการเตรียมข้อมูลสำหรับการแสดงผล

        แทนที่จะแยกไฟล์ markup กับไฟล์ logic ออกจากกัน แต่ React ได้รวมสองสิ่งนี้ไว้ในร่างของ "components"
        ทำให้เราสามารถเขียน markup ไว้บน Javascript logic ได้เลย (ก็คือ JSX นี้แหละ)
        
        อย่างไรก็ตาม React ไม่จำเป็นต้องใช้ JSX เสมอไป แต่คนส่วนใหญ่ก็นิยมจะใช้กัน เพราะ JSX ช่วยให้ผู้เขียนทำงานได้ง่ายขึ้นจากการที่เราเห็นโครงสร้างของ UI บน Javascript Code เลย รวมถึงทำให้ React แสดง error message ได้ด้วย

      เรามาดูกันว่าคุณสมบัติพื้นฐานของ JSX มีอะไรบ้าง ...

      *เราสามารถใส่ Expression เข้าไปใน JSX ได้!*

        const name = 'Josh Perez';

        const element = (
          <h1>
            Hello, {name}
          </h1>
        );

        ReactDOM.render(
          element,
          document.getElementById('root')
        );

        จากตัวอย่างข้างต้น เราได้ประกาศตัวแปร name ไว้ จากนั้นเราใส่มันเข้าไปใน JSX โดยจำเป็นต้องมีเครื่องหมายปีกกาล้อมรอบตัวแปรนั้น ๆ ไว้
        ซึ่งจากตัวอย่าง โปรแกรมจะแสดงผลออกมาเป็น "Hello, Josh Perez" ภายใต้ <h1> tag
        ยิ่งกว่านั้น เราสามารถใส่ Javascript expression อะไรก็ได้เข้าไปใน JSX (สมการคณิตศาสตร์, Object, ฟังก์ชั่น)
        
        Note: เราสามารถแบ่ง JSX เป็นหลายบรรทัดได้ เพื่อทำให้อ่านได้ง่าย เพียงแต่ให้ใส่วงเล็บล้อมไว้อีกที เพื่อป้องกันการ error จากการใส่ semicolon โดยอัตโนมัตร

      *JSX ก็นับว่าเป็น Javascript Expression เช่นกัน!*

        หลังจากการคอมไพล์ JSX expressions จะกลายมาเป็นการเรียกใช้ฟังก์ชั่น Javascript ปกติ และประมวลผลเป็น Javascript Object จากเหตุนี้จะหมายความว่า เราสามารถใช้ JSX ภายใน if statement และ for loops ต่าง ๆ
        assign JSX ใส่ตัวแปร, รับ JSX มาใน function argument และ return JSX จากฟังก์ชั่นดังตัวอย่างด้านใต้

        function getGreeting(user) {
          if (user) {
            return <h1>Hello, {formatName(user)}!</h1>;
          }
          return <h1>Hello, Stranger.</h1>;
        }

      *ระบุ Attribute เข้าไปใน JSX ได้เช่นกัน!*

        const element = <div tabIndex="0"></div>;
        const element = <img src={user.avatarUrl}></img>;

        จากตัวอย่างด้านบน เราจะใช้ string เป็น attribute ได้ (ใส่ในเครื่องหมายฟันหนู " อีกที)
        หรือจะใส่ Javascript Expression เข้าไปได้เช่นกัน (แต่ต้องล้อมด้วยเครื่องปีกกานะ {})
        จะใช้ฟันหนู " และปีกกา {} ร่วมกันใน attribute เดียวไม่ได้!

        Extra
        เนื่องจาก JSX มีความใกล้ชิดกับ Javascript มากกว่า HTML ดังนั้น React DOM จึงใช้รูปแบบการเขียนแบบ camelCase .ในการเขียนชื่อ HTML attribute เช่น class ใน JSX จะเขียนเป็น className, tabindex จะเขียนเป็น tabIndex

      *เกี่ยวกับการกำหนด Children ภายใน JSX*
        อย่างแรก ถ้า tag อะไรก็ตาม ไม่มี children ภายใต้ tag นั้น ๆ ให้ปิด tag ด้วยเครื่องหมาย /> ได้เลย (เหมือน XML)

          const element = <img src={user.avatarUrl} />;

        แต่ถ้า JSX tag มี children ก็ให้ปิดด้วย tag ปกติ
          const element = (
            <div>
              <h1>Hello!</h1>
              <h2>Good to see you here.</h2>
            </div>
          );

      *JSX ช่วยปกป้องโค้ดเราจากการโจมตีแบบ Injection ได้นะ*
        โดยพื้นฐานแล้ว React DOM จะ 'escape' ค่าใด ๆ ก็ตามที่ถูกฝังไว้ใน JSX ก่อนที่จะเรนเดอร์ เพราะเหตุนี้จึงรับประกันได้ว่าเราจะไม่สามารถ 'inject' อะไรก็ตามนอกเหนือจากที่เราเขียนลงไปในชุดคำสั่งนั้น
        ทุกอย่างจะถูกเปลี่ยนเป็น string ก่อนที่จะเรนเดอร์ เงื่อนไขนี้ก็ช่วยป้องกันการโจมตีแบบ XSS (cross-site-scripting) ด้วยเช่นกัน

          const title = response.potentiallyMaliciousInput;
          const element = <h1>{title}</h1>;

        แบบด้านบนนี้ปลอดภัยหายห่วง

      *JSX ในรูปของ Object*

          const element = (
            <h1 className="greeting">
              Hello, world!
            </h1>
          );

          const element = React.createElement(
            'h1',
            {className: 'greeting'},
            'Hello, world!'
          );

        ตัวแปร 'element' ด้านบนทั้งสองตัวนี้มีความคล้ายคลึงกันในเรื่องการแสดงผลนะ
        แต่ตอนกระบวนการ process จะมีความแตกต่างตรงที่ ..
        ตอนฟังก์ชั่น React.createElement() ถูกเรียกใช้ มันจะช่วยตรวจสอบโค้ดทำให้เราเขียนโค้ดที่ปราศจาก bug ได้
        แต่เบื้องหลังนั้น มันจะสร้าง Object ขึ้นมา (ตัวอย่างด้านใต้)

          const element = {
            type: 'h1',
            props: {
              className: 'greeting',
              children: 'Hello, world!'
            }
          };

        โดย object เหล่านี้จะถูกเรียกว่า 'React Elements' เราจะมองว่ามันคือคำอธิบายสิ่งที่จะแสดงผลบนหน้าจอก็ได้เช่นกัน เพราะ React จะอ่าน object เหล่านี้ แล้วใช้มันในการสร้างและเปลี่ยนแปลง DOM

          Extra
            แนะนำว่าให้ใช้ “Babel” language definition เป็นทางเลือกสำหรับโปรแกรมเขียนโค้ด 
            เพราะมันช่วย highlight แยกสีให้กับ Javascript กับ JSX ของเราได้

    -------

    3.Rendering Elements
      กล่าวอย่างง่าย Elements ก็คือตัวต่อชิ้นที่เล็กที่สุดในการกำหนดการแสดงผลของ React apps (ตัวอย่างด้านใต้)

        const element = <h1>Hello, world</h1>;
      
      React elements จะไม่เหมือน DOM elements ของ browser ซะทีเดียว เพราะ React elements คือ object ธรรมดา ๆ ที่สร้างได้ไม่ยาก ส่วน React DOM ก็มีหน้าที่ที่จะอัพเดท DOM ให้ตรงกับสิ่งที่ React elements กำหนดไว้

      Note: บางคนอาจจะสับสนระหว่างคอนเซปของ elements กับ components อธิบายคร่าว ๆ Components ถูกสร้างมาจาก elements นี่เอง

      *หลักการเรนเดอร์ Element เข้าไปใน DOM*
        สมมติว่าเราสร้าง <div> tag ไว้บนไฟล์ HTML

          <div id="root"></div>
        
        เราจะเรียก <div> ตัวนี้ว่า "root" เพราะทุกอย่างที่ถูกใส่เข้าไปใน <div> ตัวนี้จะถูกจัดการโดย React DOM

        โดยทั่วไป Application ที่สร้างมาจาก React อย่างเดียวมักจะใช้ "root" DOM เพียง node เดียว แต่ถ้าหากเรานำ React ไปใช้กับ app ที่ถูกสร้างไว้อยู่แล้ว เราอาจจะต้องแยก "root" DOM ออกมาหลาย ๆ node ขึ้นอยู่กับสถานการณ์

        วิธีเรนเดอร์ elements ให้ใส่เข้าไปใน DOM ก็ทำได้ง่าย ๆ เพียงแค่ส่งค่าทั้งสองเข้าไปใน ReactDOM.render() ฟังก์ชั่น (ตัวอย่างด้านใต้)

          const element = <h1>Hello, world</h1>;
          ReactDOM.render(element, document.getElementById('root'));

        จากตัวอย่างเราจะเห็นได้ว่า เราได้สั่งเรนเดอ element เข้าไปยัง "root" DOM ในที่นี้ก็คือ <div> tag ใน HTML ไฟล์นั่นเอง สิ่งที่ได้บนหน้าจอก็คือ "Hello, world"

      *แล้วหากเราจะอัพเดท Elements หละ?*
          โดยหลักการแล้ว elements เป็นสิ่งที่เปลี่ยนแปลงไม่ได้ เมื่อเราสร้าง element ขึ้นมาแล้ว เราไม่สามารถแก้ไข children หรือ attribute ของมันได้ ให้ลองนึกว่า element คือเฟรม ๆ หนึ่งของหนังเรื่องนึง เฟรมใบนั้นเป็นตัวกำหนดว่าภาพที่ฉาย (UI) ในช่วงเวลานั้นออกมาเป็นอย่างไร

          จากความรู้ที่เราเรียนรู้มาจนถึงตอนนี้ วิธีการเดียวที่จะอัพเดทหรือเปลี่ยนแปลง UI ได้ ก็คือการสร้าง element ขึ้นมาใหม่ แล้วส่งไปเรนเดอร์กับ ReactDOM.render()

            function tick() {
              const element = (
                <div>
                  <h1>Hello, world!</h1>
                  <h2>It is {new Date().toLocaleTimeString()}.</h2>
                </div>
              );
              ReactDOM.render(element, document.getElementById('root'));
            }

            setInterval(tick, 1000);

          ลองพิจารณาจากตัวอย่างข้างต้น เราสั่งเรนเดอร์ "Hello, world!" และเวลาปัจจุบันบนหน้าจอ (ซึ่งต้องมีการเปลี่ยนเลขวินาทีตลอดเวลา) สิ่งที่เราต้องทำก็คือ เราต้อง call tick() function ทุก ๆ 1 วินาที เพื่อให้ ReactDOM.redner() เรนเดอร์ UI ใหม่ เพื่อ update element

        *เรื่องเจ๋งก็คือ React จะอัพเดท UI เฉพาะในส่วนที่จำเป็น!*
          กล่าวง่าย ๆ คือเมื่อมีการสั่งเรนเดอร์ UI ใหม่ React DOM จะนำ element และ children เซ็ตก่อนหน้านี้มาเปรียบเทียบกับเซ็ตใหม่ จากนั้น DOM จะทำการอัพเดท elelment เฉพาะจุดที่แตกต่างกันเท่านั้น

          ย้อนกลับไปตัวอย่างเรื่องการอัพเดทนาฬิกา หากใช้หลักการอัพเดทเฉพาะจุด แสดงว่า จะมีเฉพาะ element ส่วน {new Date().toLocaleTimeString()} เท่านั้นที่มีการเปลี่ยนแปลง ส่วนอื่น ๆ จะไม่มี action ใด ๆ ทั้งสิ้น

    4.Components and Props
      Component คือสิ่งที่ทำให้เราสามารถแบ่ง UI (element) ออกจากกันอย่างอิสระได้ เราสามารถนำมันมาใช้ซ้ำ หรือจัดการมันได้โดยอิสระ ถ้าอธิบายตามคอนเซป Component ก็จะเหมือนกับ Javascript Function โดยที่มันจะรับ input (เราเรียกสิ่งนี้ว่า "props") เข้ามา จากนั้นจะ return React Element กลับไปเพื่อสร้าง UI ต่อไป

      *รูปแบบของการสร้าง Components*
        เราสามารถกำหนด components ขึ้นมาได้จาก 2 วิธีการ
          1. Function
            ฟังก์ชั่นเป็นวิธีการที่ง่ายที่สุดในการสร้าง Component

              function Welcome(props) {
                return <h1>Hello, {props.name}</h1>;
              }

            จากฟังก์ชั่น Welcome() ด้านบนที่เห็นนี้ก็คือ React Component ที่ถูกต้อง เพราะฟังก์ชั่นนี้รับ object argument ตัวเดียวที่ชื่อว่า props (ย่อมาจาก properties) แล้ว return React element กลับไป Component ลักษณะนี้เราจะเรียกว่า "function components" เพราะมันก็คือ Javascript function นี้แหละ

          2. Class
            เราสามารถสร้าง component มาจาก Javascript Class ได้เช่นกันดังตัวอย่างข้างใต้

              class Welcome extends React.Component {
                render() {
                  return <h1>Hello, {this.props.name}</h1>;
                }
              }

            ซึ่ง component ทั้งสองแบบนี้ มีคุณสมบติเท่ากันในมุมมองของ React ใช้แบบไหนก็ได้

      *การเรนเดอร์ Component*
        ข้อมูลก่อนหน้านี้เราจะทราบเพียงว่า React elements เป็นตัวแทนของ DOM tags

          const element = <div />;

        อย่างไรก็ตาม element ก็สามารถป้อน component เข้าไปได้เช่นกัน!

          const element = <Welcome name="Sara" />;

        เมื่อ React ตรวจพบว่ามี element ที่มีค่าเป็น component มันก็จะส่ง JSX attribute และ children เข้าไปใน component ตัวนั้นในรูปของ object ตัวเดียว เราเรียก object ตัวนี้ว่า "props" (ตัวอย่างเช่นด้านใต้)

          function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
          }

          const element = <Welcome name="Sara" />;
          ReactDOM.render(
            element,
            document.getElementById('root')
          );

        จากตัวอย่าง React ได้ส่ง props ที่ชื่อว่า "name" เข้าไปยัง function component ที่ชื่อว่า Welcome() โดย component Welcome ก็จะ return JSX ออกมาพร้อมกับมีค่าจาก props.name ในนั้น (props.name ก็คือ object {name: 'Sara'}) สุดท้าย React ก็จะเรนเดอร์ <h1>Hello, Sara</h1> ออกมา

        Note: ชื่อของ Component จะต้องขึ้นต้นด้วยอักษรตัวพิมพ์ใหญ่เท่านั้น! เช่น <Welcome /> เพราะหากใช้ตัวพิมพ์เล็กขึ้นต้น React จะเข้าใจผิดว่าเป็น DOM tag แบบนี้ <div />
      
      *การประกอบร่างของ Component*
        จากที่เกริ่นไว้ตอนแรกว่า component สามารถใช้ซ้ำได้ เลยอยากจะเสริมว่า component ก็สามารถมี component อื่น ๆ เป็น children ได้เช่นกัน (ดูตัวอย่างทั้งสองหลักการจากโค้ดด้านใต้)

          function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
          }

          function App() {
            return (
              <div>
                <Welcome name="Sara" />
                <Welcome name="Cahal" />
                <Welcome name="Edite" />
              </div>
            );
          }

          ReactDOM.render(
            <App />,
            document.getElementById('root')
          );

        จากที่เราสังเกตุได้ เรามี <App /> component ที่ถูกส่งไปเรนเดอร์ใน DOM โดย component ตัวนี้ก็มี <Welcome /> component เป็นส่วนประกอบย่อยอีกที อีกทั้งเรายังเรียกใช้ <Welcome /> ถึงสามครั้ง โดยเราส่ง props.name ที่มีค่าต่างกันออกไป ผลการเรนเดอร์ เราจะพบว่ามีการ display Hello ถึงสามครั้ง แต่ชื่อที่ตามหลังก็จะแตกต่างกันออกไป ด้วยคอนเซปนี้ เราสามารถประยุกต์ใช้กับ button, form หรือข้อความได้เช่นกัน

      *การแบ่ง Component*
        จากหลักการที่เราเรียนรู้มาข้างต้น ทำให้เราสามารถบริหารการใช้งานของ component ของเราได้อย่างมีประสิทธิภาพ รวมถึงการแบ่ง Component ออกเป็น component ย่อย ๆ ก็ทำได้เช่นกัน (ยกตัวอย่างด้านใต้)

          function Comment(props) {
            return (
              <div className="Comment">
                <div className="UserInfo">
                  <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                  />
                  <div className="UserInfo-name">
                    {props.author.name}
                  </div>
                </div>
                <div className="Comment-text">
                  {props.text}
                </div>
                <div className="Comment-date">
                  {formatDate(props.date)}
                </div>
              </div>
            );
          }

        จาก <Comment /> component ที่ซับซ้อนข้างบนนี้ ได้รับ props มาถึงสามตัว ซึ่งไม่ค่อยเกี่ยวข้องกันเท่าไหร่ หากมองในมุมการเรนเดอร์ รวมถึงมันอาจทำให้เราสับสนตอนแก้ไข รวมถึงการใช้ซ้ำก็ดูจะจำกัด ดังนั้นการแบ่งออกมาเป็น components ย่อย ๆ จะทำให้การทำงานเราเป็นไปอย่างมีประสิทธิภาพและง่ายขึ้น

        เราจะเริ่มจากดึงส่วนของ avatar ออกมา แล้วสร้าง component <Avartar /> ใหม่ให้กับมัน เหตุผลที่แยกออกมา เพราะ avartar ไม่มีส่วนเกี่ยวของหากส่วนของ comment มีการเรนเดอร์อะไรก็ตาม เพราะ avatar ก็ยังอยู่เหมือนเดิม การแบ่งออกมาจึงเป็นสิ่งที่พึงทำ (ในตัวอย่างได้เปลี่ยนชื่อ props ด้วยเพื่อให้เข้ากับบริบทของ component นั้น ๆ)

          function Avatar(props) {
            return (
              <img className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
              />
            );
          }

        จากนั้นเราก็แยกส่วนของ UserInfo ออกมาเป็น component ใหม่ อีกทั้งเรายังใส่ <Avatar /> เข้าไปเป็น children ด้วย เพราะสอง component นี้เกี่ยวข้องกันโดยตรง (รูป avatar จะเปลี่ยนตามข้อมูลของ user)

          function UserInfo(props) {
            return (
              <div className="UserInfo">
                <Avatar user={props.user} />
                <div className="UserInfo-name">
                  {props.user.name}
                </div>
              </div>
            );
          }

        สุดท้าย <Comment /> ก็จะเหลือดังข้างใต้ โดยมี <UserInfo /> อยู่ภายใต้อีกที จากโค้ดยาว ๆ ก็ดูเป็นระบบขึ้นมาทันที

          function Comment(props) {
            return (
              <div className="Comment">
                <UserInfo user={props.author} />
                <div className="Comment-text">
                  {props.text}
                </div>
                <div className="Comment-date">
                  {formatDate(props.date)}
                </div>
              </div>
            );
          }

        โดยภาพรวมมันอาจจะดูวุ่นวายหน่อยในช่วงแรก ๆ สำหรับการแบ่ง component แต่หากเราทำจนคล่องแล้ว ก็จะเป็นประโยชน์กับเรามาก ๆ ข้อสังเกตที่น่าสนใจข้อนึงก็คือ หาก UI ส่วนไหนที่เราเห็นว่ามีการใช้ซ้ำบ่อย ๆ  (Button, Panel, Avatar) หรือซับซ้อนเอามาก ๆ (App, FeedStory, Comment) สิ่งเหล่านี้ก็เป็นสัญญาณที่ดีที่เราจะใช้หลักการ "แบ่ง" และ "ใช้ซ้ำ" ของ component

      *Props มีคุณสมบัติ Read-only*
        ไม่ว่าเราจะสร้าง component ในรูปแบบของ function หรือ class ก็ตาม Component เหล่านี้จะต้องไม่ไปดัดแปลงหรือแก้ไข props ใด ๆ ที่ถูกส่งเข้าไปใน component นั้น ๆ

        ยกตัวอย่างให้เห็นภาพ

          function sum(a, b) {
            return a + b;
          }

        เราจะเรียกฟังก์ชั่นด้านบนว่า "pure function" เพราะมันไม่มีการเปลี่ยนแปลง input ของมันเอง รับค่าเข้ามาอย่างไร ก็จะคงไว้อย่างนั้น รวมถึง return ผลลัพธ์ที่มาจาก input กลับไปด้วย

          function withdraw(account, amount) {
            account.total -= amount;
          }

        ส่วนฟังก์ชั่นที่สองจะถูกเรียกว่า "impure function" อย่างที่เราสังเกตได้ ฟังก์ชั่น withdraw() มีการแก้ไขค่าของ account.total ในฟังก์ชั่นตัวเอง

        และแน่นอนใน React Component ก็ต้องทำตัวให้เหมือน "pure function" เราไม่สามารถไปแก้ไข props ใน component ได้ แต่ธรรมชาติของ UI จำเป็นที่จะต้องมีการเปลี่ยนแปลงตลอด ดังนั้น React จึงมีสิ่งที่เรียกว่า "State" ที่จะเข้ามาช่วยแก้ไขปัญหานี้ ทำให้ React Component สามารถแก้ไข output ได้เพื่อตอบสนอง action ของผู้ใช้ เน็ตเวิร์ค หรืออะไรก็ตามแต่ โดยไม่ละเมิดกฎข้อนี้