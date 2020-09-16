export class Category {
    id: number;
    category: string;
    icon: string;

    constructor(category: any) {
      this.id = category.Id;
      this.category = category.Category;
      this.icon = category.Icon;
    }
  
    public html() {
  
      return `
      <div class="categories" id=${this.id}>
      <i class="fas fa-${this.icon}"></i>
      <p>${this.category}</p>
      </div>
          `;
    }
  }
  