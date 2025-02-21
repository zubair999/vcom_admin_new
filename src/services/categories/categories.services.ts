import { Category, CategoryData, CategoryServiceInterface } from "@/types";

export class CategoriesService implements CategoryServiceInterface {
  private categories: Category[] = [
    {
      id: "p1",
      name: "Apple iPhone 14",
      category: "Smartphones",
      price: 799,
      stock: 120,
    },
    {
      id: "p2",
      name: "Samsung Galaxy S23",
      category: "Smartphones",
      price: 899,
      stock: 200,
    },
    {
      id: "p3",
      name: "MacBook Air M2",
      category: "Laptops",
      price: 1199,
      stock: 85,
    },
    {
      id: "p4",
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: 349,
      stock: 60,
    },
    {
      id: "p5",
      name: "Dell XPS 13",
      category: "Laptops",
      price: 1299,
      stock: 45,
    },
  ];

  // Get all categories with pagination
  public async getAllCategories(): Promise<CategoryData> {
    try {
      const page = 1;
      const pageSize = 10;

      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedItems = this.categories.slice(startIndex, endIndex);

      const totalItems = this.categories.length;
      const totalPages = Math.ceil(totalItems / pageSize);

      return {
        data: paginatedItems,
        pagination: {
          currentPage: page,
          pageSize: pageSize,
          totalItems: totalItems,
          totalPages: totalPages,
        },
      };
    } catch (error) {
      throw new Error(`Failed to fetch categories: `);
    }
  }

  // Get a category by its ID
  public async getCategoryById(id: string): Promise<Category> {
    try {
      const category = this.categories.find((category) => category.id === id);
      if (!category) {
        throw new Error("Category not found");
      }
      return category;
    } catch (error) {
      throw new Error(`Failed to fetch category by ID: `);
    }
  }

  // Get a category by its slug (assuming slug is part of the name for simplicity)
  public async getCategoryBySlug(slug: string): Promise<Category> {
    try {
      const category = this.categories.find((category) => 
        category.name.toLowerCase().replace(/\s+/g, '-').toLowerCase() === slug.toLowerCase()
      );
      if (!category) {
        throw new Error("Category not found");
      }
      return category;
    } catch (error) {
      throw new Error(`Failed to fetch category by slug: `);
    }
  }

  // Create a new category
  public async createCategory(category: Category): Promise<Category> {
    try {
      this.categories.push(category);
      return category;
    } catch (error) {
      throw new Error(`Failed to create category: `);
    }
  }

  // Update an existing category
  public async updateCategory(id: string, updatedCategory: Category): Promise<Category> {
    try {
      const index = this.categories.findIndex((category) => category.id === id);
      if (index === -1) {
        throw new Error("Category not found");
      }
      this.categories[index] = { ...this.categories[index], ...updatedCategory };
      return this.categories[index];
    } catch (error) {
      throw new Error(`Failed to update category: `);
    }
  }

  // Delete a category by ID
  public async deleteCategory(id: string): Promise<boolean> {
    try {
      const index = this.categories.findIndex((category) => category.id === id);
      if (index === -1) {
        throw new Error("Category not found");
      }
      this.categories.splice(index, 1);
      return true;
    } catch (error) {
      throw new Error(`Failed to delete category: `);
    }
  }
}
