using CoffeeShop.Models;

namespace CoffeeShop.Repositories
{
    public interface ICoffeeRepository
    {
        void Add(Coffee coffee);
        void Delete(int id);
        Coffee? GetById(int id);
        List<Coffee> GetAll();
        void Update(Coffee coffee);
    }
}