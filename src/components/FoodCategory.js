import FoodItems from "./FoodItems";

function FoodCategory({ category, items }) {
    return (
        <div className="tab-pane fade show p-0">
            <div className="row g-4">
                {items.map(item => (
                    <FoodItems
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default FoodCategory;