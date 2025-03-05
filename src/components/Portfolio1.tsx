import Link from 'next/link';
import React from 'react';

export default function Portfolio1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className='full-title'>
          <div className='container'>
            {/* Page Heading/Breadcrumbs */}
            <h1 className='mt-4 mb-3'>
              การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล
              {/* <small>Subheading</small> */}
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className='container'>
          <div className='breadcrumb-main'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href='/'>หน้าหลัก</a>
              </li>
              <li className='breadcrumb-item active'>Portfolio 1</li>
            </ol>
          </div>
          <div className='project-inner'>
            {/* Project One */}
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-01.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
                <p>
                  ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                  กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                </p>
                <p>
                  “ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                  จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                  ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                  ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                  Government) นั่นเอง”
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-1-66.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className='project-inner'>
            {/* Project Two */}
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-02.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>
                  การดำเนินการเปลี่ยนแปลงให้เกิดประสิทธิผลต้องประกอบด้วยกิจกรรมหลัก
                  ดังนี้
                </h3>
                <p>
                  บุคลากรเป็นฟันเฟืองสำคัญที่จะให้องค์กรเติบโตอย่างยั่งยืน
                  อย่างไรก็ตาม
                  หนึ่งในปัจจัยที่บั่นทอนศักยภาพและประสิทธิภาพของบุคคลได้
                  หากไม่ได้รับการจัดการที่ดี นั่นคือการเปลี่ยนแปลง
                </p>
                <p>
                  การเปลี่ยนแปลง เป็นปัจจัยสำคัญที่ส่งผลต่อความเครียดได้
                  ไม่ว่าจะเป็นการเปลี่ยนแปลงที่ดีหรือไม่ก็ตาม เช่น
                  ปัญหาการสูญเสียหน้าที่การงานที่เคยทำ (Job Loss)
                  การเปลี่ยนแปลงบทบาทในการทํางาน (Job Change)
                  การหมุนเวียนไปทำงานตําแหน่งใหม่ (Job Rotation)
                  รวมถึงการเรียนรู้เรื่องใหม่ๆ (Learning)
                  และละเลิกในสิ่งที่เคยเรียนมาว่าถูกต้อง
                  หรือสิ่งที่เคยปฏิบัติมาตลอด (Unlearning) เป็นต้น
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-67-71.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className='project-inner'>
            {/* Project Three */}
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-03.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>
                  การดำเนินการเปลี่ยนแปลง
                  เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล
                </h3>
                <p>
                  เป็นที่ชัดเจนว่า เรากำลังเผชิญกับการใช้ชีวิต
                  การทำธุรกิจบนโลกมีลักษณะผันผวน ไม่แน่นอน สลับซับซ้อน และกำกวม
                  หรือที่เรียกว่า VUCA(Volatility, Uncertainty, Complexity และ
                  Ambiguity)
                  อันเนื่องจากผลกระทบจากเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็ว
                  โดยเฉพาะเทคโนโลยีดิจิทัลที่มีรากเหง้ามาจากเทคโนลีสารสนเทศและการสื่อสาร
                  (ICT: Information and Communication Technology){' '}
                </p>
                <p>
                  เทคโนโลยีดิจิทัลเป็นหนึ่งในสามเทคโนโลยีสู่ยุคอนาคต
                  ที่รวมถึงเทคโนโลยีชีวภาพ และเทคโนโลยีนาโน
                  ซึ่งคือยุคปฏิวัติอุตสาหกรรมครั้งที่ 4 (4th Industrial
                  Revolution)
                  ที่เกิดการเชื่อมต่อระหว่างคนกับคอมพิวเตอร์อย่างไร้รอยต่อ
                  (Seamless Interaction) อันนำไปสู่จักรวาลนฤมิต หรือ เมตาเวิร์ส
                  (Metaverse)
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-72-75.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className='project-inner'>
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-04.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  7
                  ปัจจัยที่มีผลต่อการเปลี่ยนแปลงครั้งใหญ่จากความคิดเห็นของผู้บริหาร
                  2000 คน
                </p>
                <p>
                  ในการสำรวจผู้บริหารในองค์กรทุกขนาดและทุกอุตสาหกรรมมากกว่า
                  2,000 ราย โดย McKinsey ในปี 2014
                  ตอนหนึ่งของรายงานได้กล่าวถึงปัจจัยที่เหล่าผู้บริหารให้ความเห็นว่าเป็นสิ่งสำคัญที่ช่วยให้การเปลี่ยนแปลงประสบความสำเร็จอย่างยั่งยืน
                  ซึ่งมีด้วยกันอยู่ 7 ข้อ ที่สรุปมาให้อ่านกันแล้ววันนี้
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-76-78.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className='project-inner'>
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-04.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  การสร้างความพร้อมในการเปลี่ยนแปลงพฤติกรรมเพื่อส่งเสริมสุขภาพ
                </p>
                <p>
                  ผลการวิจัยทางด้านพฤติกรรมสุขภาพจำนวนมากพบผลสอดคล้องกันว่า
                  การออกกำลังกายส่งผลดีต่อสุขภาพทั้งด้านร่างกาย จิตใจ
                  และสังคมของผู้ออกกำลังกาย เช่น ทำให้ร่างกายแข็งแรง
                  และมีอารมณ์สดชื่นแจ่มใส
                  การออกกำลังกายที่ต้องทำเป็นกิจกรรมกลุ่ม เช่น การตีแบดมินตัน
                  การเล่นบาส
                  ยังเป็นการเปิดโอกาสให้เราได้สร้างความรู้จักกับคนอื่นๆ
                  ที่มีความหลากหลาย
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-79-82 copy.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className='project-inner'>
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-04.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>แบบสำรวจความพร้อมในการเปลี่ยนแปลง</h3>
                <p>แบบสำรวจการจัดการการเปลี่ยนแปลงมากกว่า 100 ข้อ</p>
                <p>
                  การสำรวจการจัดการการเปลี่ยนแปลงช่วยปรับกระบวนการเปลี่ยนแปลงของบริษัทของคุณให้มีประสิทธิภาพมากขึ้น
                  ใช้คำถามในบทความนี้เพื่อสำรวจพนักงานของคุณในระหว่างโครงการเปลี่ยนแปลง
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-83-85.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className='project-inner'>
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-04.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>การต่อต้านการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href='https://www.humanica.com/th/resistance-to-change/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    การต่อต้านการเปลี่ยนแปลงคืออะไร องค์กรควรรับมืออย่างไร
                  </Link>
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลง
                  นับว่าเป็นปัญหาสำคัญที่หลายองค์กรมักมองข้าม
                  เพราะด้วยความคิดที่ว่า หากมีนโยบายการเปลี่ยนแปลงใดๆ ขึ้นมา
                  เหล่าพนักงานย่อมต้องเชื่อฟังและปฏิบัติตาม แต่เชื่อไหมว่า
                  มีบางส่วนเท่านั้นที่ยอมรับได้
                  และแน่นอนว่าก็มีบางส่วนที่ยอมรับไม่ได้เช่นกัน
                  นำมาสู่การต่อต้านการเปลี่ยนแปลงในที่สุด สำหรับบทความนี้
                  Humanica
                  จะมาเจาะลึกถึงสาเหตุและวิธีการรับมือกับสถานการณ์ที่ว่ามานี้
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-86-89.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className='project-inner'>
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-04.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>การเอาชนะการต่อต้านการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href='https://primeast.com/us/insights/7-strategies-for-overcoming-resistance-to-change-in-the-workplace/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    7 กลยุทธ์ในการเอาชนะการต่อต้านการเปลี่ยนแปลงในสถานที่ทำงาน
                  </Link>
                </p>
                <p>
                  ในโลกทุกวันนี้
                  การเปลี่ยนแปลงคือสิ่งเดียวที่ไม่เปลี่ยนแปลงซึ่งรายล้อมเราอยู่
                  ในธุรกิจก็เช่นเดียวกัน สำหรับพนักงาน
                  การเปลี่ยนแปลงอาจเป็นเรื่องสำคัญ
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-90-92.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className='project-inner'>
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-04.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href='https://lsaglobal.com/essential-components-of-a-successful-vision-for-change/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    วิสัยทัศน์ร่วมเพื่อการเปลี่ยนแปลงคือสถานะอนาคตที่ดีขึ้นที่ผู้มีส่วนได้ส่วนเสียหลักทุกคนต่างเห็นพ้องต้องกัน
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: 'disc' }} className='ml-4'>
                    <li>
                      การเปลี่ยนแปลงในอนาคตจะมีลักษณะและความรู้สึกอย่างไร?
                    </li>
                    <li>
                      เหตุใดการเปลี่ยนแปลงที่ต้องการจึงดีกว่าสิ่งที่เป็นอยู่ตอนนี้?
                    </li>
                    <li>
                      ตัวเร่งปฏิกิริยาใดที่ทำให้การเปลี่ยนแปลงมีความสำคัญหรือเร่งด่วนในขณะนี้เมื่อเปรียบเทียบกับลำดับความสำคัญอื่นๆ
                    </li>
                    <li>
                      อะไรทำให้การเปลี่ยนแปลงเหล่านี้สร้างแรงบันดาลใจและน่าจดจำในระดับบุคคล
                      ทีม และองค์กร?
                    </li>
                    <li>
                      การเปลี่ยนแปลงจะสอดคล้องกับกลยุทธ์โดยรวมขององค์กรของเรา
                      จุดมุ่งหมายที่กว้างขึ้น และวัฒนธรรมองค์กรอย่างไร
                    </li>
                  </ol>
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-93-98.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className='project-inner'>
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-04.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์</h3>
                <p>
                  <Link
                    href='https://www.popticles.com/branding/how-to-write-effective-vision-statement/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    วิธีเขียน Vision Statement ให้มีประสิทธิภาพ
                  </Link>
                </p>
                <p>
                  Vision Statement หรือคำกล่าวถึงวิสัยทัศน์ของแบรนด์หรือองค์กร
                  ซึ่งมันคือแนวทางที่แสดงออกให้เห็นถึงการที่จะไปสู่เป้าหมายของแบรนด์หรือการทำธุรกิจ
                  ผ่านคำพูดหรือข้อความและมีการสื่อสารไปยังผู้มีส่วนได้ส่วนเสียทุกๆฝ่าย
                  (Stakeholders) ไม่ว่าจะเป็นพนักงาน คู่ค้าทางธุรกิจ ลูกค้า
                  ผู้ถือหุ้น
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-99-102.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className='project-inner'>
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-04.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>การค้นหาผู้มีส่วนได้ส่วนเสีย</h3>
                <p>
                  <Link
                    href='https://thailandpolicylab.com/stakeholder-analysis/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    ทำความรู้จักมนุษย์ให้ดีขึ้นด้วย
                    “การวิเคราะห์ผู้มีส่วนได้ส่วนเสีย”
                  </Link>
                </p>
                <p>
                  ปฏิเสธไม่ได้เลยว่าผู้มีส่วนได้ส่วนเสียเป็นหนึ่งในปัจจัยที่จะมาตัดสินความสำเร็จของโครงการใดๆ
                  ก็ตาม เนื่องจากโครงการจะ “สำเร็จ” ได้ก็ด้วยเครือข่ายสนับสนุน
                  ขณะเดียวกันโครงการนั้นก็สามารถ “ล้มเหลว”
                  ได้โดยผู้คนกลุ่มเดียวกันนี้เอง
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-103-106.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className='project-inner'>
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-04.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>การโน้มน้าวผู้มีส่วนได้ส่วนเสีย</h3>
                <p>
                  <Link
                    href='https://medium.com/@glenn_6066/how-to-influence-stakeholders-as-the-ceo-420128852e30'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    วิธีการสร้างอิทธิพลต่อผู้มีส่วนได้ส่วนเสียในฐานะ CEO{' '}
                  </Link>
                </p>
                <p>
                  ในฐานะซีอีโอ คุณมีผู้มีส่วนได้ส่วนเสียจำนวนมาก
                  และคุณมีหน้าที่รับผิดชอบในการจัดการความสัมพันธ์กับผู้มีส่วนได้ส่วนเสียเหล่านี้
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-107-110.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className='project-inner'>
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-04.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href='https://whatfix.com/blog/change-advisory-board/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    คณะกรรมการที่ปรึกษาการเปลี่ยนแปลงคืออะไร
                    แนวทางปฏิบัติที่ดีที่สุดและประโยชน์
                  </Link>
                </p>
                <p>
                  Change Advisory Board (CAB)
                  คือคณะกรรมการอย่างเป็นทางการภายในองค์กรที่ทำหน้าที่ดูแลและให้คำแนะนำในการจัดการโครงการริเริ่มการเปลี่ยนแปลง
                  โดยเฉพาะอย่างยิ่งโครงการที่เกี่ยวข้องกับโครงสร้างพื้นฐานด้านไอที
                  ระบบ และกระบวนการ CAB ประกอบด้วยสมาชิกจากแผนกต่างๆ
                  และระดับต่างๆ ของธุรกิจ รวมถึงไอที ​​หน่วยธุรกิจ
                  และผู้มีส่วนได้ส่วนเสียรายสำคัญอื่นๆ
                  โดยดำเนินการภายใต้ขั้นตอนและแนวทางที่กำหนดไว้อย่างชัดเจน
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-111-114.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className='project-inner'>
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <img
                    className='img-fluid rounded mb-3 mb-md-0'
                    src='images/portfolio-big-04.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-5'>
                <h3>การประคับประคองการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href='https://www.dittothailand.com/dittonews/gov-new-digital-government/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    รัฐบาลดิจิทัลยุคใหม่ ต้องปรับเปลี่ยนระบบการทำงานอย่างไรบ้าง?
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: 'decimal' }} className='ml-4'>
                    {' '}
                    <li>
                      การดำเนินเปลี่ยนแปลงทำให้เกิดค่าใช้จ่ายอย่างหลีกเลี่ยงไม่ได้
                    </li>
                    <li>การพัฒนาสมรรถนะและทักษะที่จำเป็นต่อการเปลี่ยนแปลง</li>
                    <li> การส่งเสริมให้พนักงานแสดงพฤติกรรมใหม่</li>
                  </ol>
                </p>
                <h3>ข้อควรหลีกเลี่ยงในการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href='https://www.prosci.com/blog/why-change-management-fails'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    6 เหตุผลที่การบริหารการเปลี่ยนแปลงล้มเหลวและวิธีหลีกเลี่ยง
                  </Link>
                </p>
                <p>
                  มักกล่าวกันว่า 70% ของแผนการเปลี่ยนแปลงล้มเหลว
                  และมีเหตุผลหลายประการที่ทำให้เกิดความล้มเหลว
                  การเปลี่ยนแปลงเป็นสิ่งที่หลีกเลี่ยงไม่ได้สำหรับองค์กรส่วนใหญ่
                  แต่กลยุทธ์และแผนการจัดการการเปลี่ยนแปลงที่มีประสิทธิภาพจะช่วยให้คุณเตรียมผู้นำและพนักงานให้พร้อมสำหรับความสำเร็จ
                </p>
                <a
                  className='btn btn-primary'
                  href='images/change/change_processing-115-119.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className='glyphicon glyphicon-chevron-right' />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className='pagination_bar'>
            {/* Pagination */}
            <ul className='pagination justify-content-center'>
              <li className='page-item'>
                <a className='page-link' href='#' aria-label='Previous'>
                  <span aria-hidden='true'>«</span>
                  <span className='sr-only'>Previous</span>
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  1
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  2
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  3
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#' aria-label='Next'>
                  <span aria-hidden='true'>»</span>
                  <span className='sr-only'>Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
