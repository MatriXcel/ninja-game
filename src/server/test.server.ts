import { RawBonus } from "./AttributeClasses/RawBonus";
import { HealEffect } from "./Effects/HealEffect";
import { EquippableSpec } from "./ItemSpecClasses/EquippableSpec";
import { HealSpecDecorator } from "./ItemSpecClasses/HealSpecDecorator";
import { ItemSpec } from "./ItemSpecClasses/ItemSpec";
import { ModelVisualizableSpecDecorator } from "./ItemSpecClasses/ModelVisualizableSpecDecorator";

let holySword = new HealSpecDecorator(
    new EquippableSpec(
        new Instance("Model"),
        "Holy Sword",
        "a holy sword of the paladins",
        20
    ),
    new HealEffect(10)
);


let holySwordInstance = holySword.CreateItemFromSpec();
