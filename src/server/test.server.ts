import { RawBonus } from "./AttributeClasses/RawBonus";
import { RawHealEffect } from "./Effects/RawHealEffect";
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
    new RawHealEffect(new RawBonus(10, 0))
);


let holySwordInstance = holySword.CreateItemFromSpec();
