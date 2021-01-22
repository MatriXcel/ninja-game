import { RawBonus } from "./AttributeClasses/RawBonus";
import { DamageEffect } from "./Effects/DamageEffect";
import { HealEffect } from "./Effects/HealEffect";
import { DamageSpecDecorator } from "./ItemSpecClasses/DamageSpecDecorator";
import { EquippableSpec } from "./ItemSpecClasses/EquippableSpec";
import { HealSpecDecorator } from "./ItemSpecClasses/HealSpecDecorator";
import { ItemSpec } from "./ItemSpecClasses/ItemSpec";
import { ModelVisualizableSpecDecorator } from "./ItemSpecClasses/ModelVisualizableSpecDecorator";

let holySword = new DamageSpecDecorator(
    new EquippableSpec(
        new Instance("Model"),
        "Holy Sword",
        "a holy sword of the paladins",
        20
    ),
    new DamageEffect(10)
);

let holySwordInstance = holySword.CreateItemFromSpec();
