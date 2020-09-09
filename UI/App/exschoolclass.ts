export class SchoolClass {
    id: number;
    title: string;
    price: number;
    minAge: number;
    maxAge: number;
    description: string;
    time: string;
    date: Date;
    constructor(schoolClass: any) {
      this.id = schoolClass.Id;
      this.title = schoolClass.Title;
      this.price = schoolClass.Price;
      this.minAge = schoolClass.MinAge;
      this.maxAge = schoolClass.MaxAge;
      this.description = schoolClass.Description;
      this.time = schoolClass.Time;
      this.date = schoolClass.Date;
    }
  
    public html() {
      let d = new Date(this.date);
      let myYear = d.getFullYear();
      let myMonth;
      let myDate = d.getDate();
  
      switch (d.getMonth()) {
        case 0:
          myMonth = 'January';
          break;
        case 1:
          myMonth = 'February';
          break;
        case 2:
          myMonth = 'March';
          break;
        case 3:
          myMonth = 'April';
          break;
        case 4:
          myMonth = 'May';
          break;
        case 5:
          myMonth = 'June';
          break;
        case 6:
          myMonth = 'July';
          break;
        case 7:
          myMonth = 'August';
          break;
        case 8:
          myMonth = 'September';
          break;
        case 9:
          myMonth = 'October';
          break;
        case 10:
          myMonth = 'November';
          break;
        case 11:
          myMonth = 'December';
          break;
      }
      let myDateString = `${myDate} ${myMonth}  ${myYear}`;
  
      return `
          <div class="ClassCard">
            <img src="img/schoolchildren.jpg" alt="penna icon" class="classImg">
          <div class="classInfo">
            <div class="date-box-class-card">
              <p>${myDateString}</p>
            </div>
              <h5>${this.title}</h5>
              <p><i class="fas fa-calendar-alt"></i> <b>${this.minAge} to ${this.maxAge} years</b></p>
              <p><i class="far fa-clock"></i> <b>${this.time}</b></p>
              <p>${this.description}</p>
              <button type="button" class="btn btn-outline-light">Learn more</button>
          </div>
        </div>
          `;
    }
  }
  