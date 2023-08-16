import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.layout}>
      <p className={classes.header}>สถิติประชากรกรุงเทพฯ พ.ศ. 2550 - 2559</p>
      <p className={classes.subHeader}>ลักษณะพื้นที่</p>
      <p className={classes.content}>
        กรุงเทพฯ เป็นจังหวัดที่มีประชากรมากที่สุดในประเทศไทย
        หากรวมประชากรแฝงที่ไม่ปรากฏในทะเบียนและคนที่
        เดินทางมาทำงานในตอนกลางวันด้วยแล้ว
        คาดว่าจะสูงถึงเกือบเท่าตัวของประชากรที่ปรากฏในทะเบียน เราจึง
        เรียกกรุงเทพฯ ว่าเป็น
        <a href="https://en.wikipedia.org/wiki/Megacity" target="_blank">
          “อภิมหานคร (megacity)”
        </a>
        คือมีประชากรตั้งแต่ 10 ล้านคนขึ้นไป
        <span>
          <br />
          <br />
          อัตราเพิ่มของประชากรกรุงเทพฯ อยู่ระดับเกือบ 1% และเริ่มลดลงในปี 2559
          ดังแสดงในแผนภูมิต่อไปนี้
        </span>
      </p>
    </div>
  );
};

export default Hero;
