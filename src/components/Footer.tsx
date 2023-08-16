import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.layout}>
      <p className={classes.subHeader}>แหล่งข้อมูล</p>
      <ul>
        <li>
          <a
            href="https://stat.bora.dopa.go.th/stat/statnew/statMONTH/statmonth/"
            target="_blank"
          >
            สำนักบริหารการทะเบียน กรมการปกครอง กระทรวงมหาดไทย, จำนวนประชากร,
            สำนักบริหารการทะเบียน กรมการปกครอง กระทรวงมหาดไทย, Editor. 2564:
            กรุงเทพฯ.
          </a>
        </li>
        <li>
          <a href="http://www.nso.go.th/" target="_blank">
            สำนักงานสถิติแห่งชาติ, การสำรวจภาวะเศรษฐกิจและสังคมของครัวเรือน พ.ศ.
            2563 สำนักงานสถิติแห่งชาติ, Editor. 2563: กรุงเทพฯ
          </a>
        </li>
        <li>
          <a href="http://www.price.moc.go.th/" target="_blank">
            สำนักดัชนีเศรษฐกิจการค้า กระทรวงพาณิชย์,
            ข้อมูลดัชนีราคาผู้บริโภคทั่วไป, สำนักดัชนีเศรษฐกิจการค้า
            กระทรวงพาณิชย์, Editor. 2563: กรุงเทพฯ.
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
