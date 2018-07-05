/**
 * An incomplete list of known game objects.
 *
 * More objects exist in the game than are shown here.
 * These are included as a find them, to provide
 * javascript constants for object names.
 * This list is non-exhaustive, and the parser is likely
 * capable of handling any object added in the future.
 *
 * The parser can successfully handle objects not listed here.
 */
export declare enum KnownGameObjectTypes {
    SaveGame = "SaveGame",
    Tile = "Tile",
    TilePOI = "TilePOI",
    FloorSwitch = "FloorSwitch",
    Headquarters = "Headquarters",
    RationBox = "RationBox",
    BasicForagePlantPlanted = "BasicForagePlantPlanted",
    LightBug = "LightBug",
    PrickleGrass = "PrickleGrass",
    BasicSingleHarvestPlant = "BasicSingleHarvestPlant",
    PrickleFlower = "PrickleFlower",
    Minion = "Minion",
    MushroomPlant = "MushroomPlant",
    BasicFabricPlant = "BasicFabricPlant",
    SandStone = "SandStone",
    POIBunkerExteriorDoor = "POIBunkerExteriorDoor",
    Wire = "Wire",
    POIDoorInternal = "POIDoorInternal",
    LogicWire = "LogicWire",
    LogicWireBridge = "LogicWireBridge",
    LogicGateAND = "LogicGateAND",
    Checkpoint = "Checkpoint",
    Battery = "Battery",
    MassiveHeatSink = "MassiveHeatSink",
    InsulatedGasConduit = "InsulatedGasConduit",
    LogicSwitch = "LogicSwitch",
    POIFacilityDoor = "POIFacilityDoor",
    ExteriorWall = "ExteriorWall",
    FacilityBackWallWindow = "FacilityBackWallWindow",
    Algae = "Algae",
    Clay = "Clay",
    IgneousRock = "IgneousRock",
    Phosphorite = "Phosphorite",
    SolidCarbonDioxide = "SolidCarbonDioxide",
    Ice = "Ice",
    Granite = "Granite",
    Obsidian = "Obsidian",
    Oilfloater = "Oilfloater",
    ColdBreather = "ColdBreather",
    ColdWheat = "ColdWheat",
    ColdWheatSeed = "ColdWheatSeed",
    Drecko = "Drecko",
    Glom = "Glom",
    SwampLily = "SwampLily",
    SpiceVine = "SpiceVine",
    Pacu = "Pacu",
    Puft = "Puft",
    GeyserGeneric_steam = "GeyserGeneric_steam",
    GeyserGeneric_methane = "GeyserGeneric_methane",
    PropTable = "PropTable",
    PropLight = "PropLight",
    SetLocker = "SetLocker",
    GeneShuffler = "GeneShuffler",
    GeyserGeneric_chlorine_gas = "GeyserGeneric_chlorine_gas",
    VendingMachine = "VendingMachine",
    PropLadder = "PropLadder",
    PropDesk = "PropDesk",
    OilWell = "OilWell",
    PropFacilityPainting = "PropFacilityPainting",
    PropFacilityWallDegree = "PropFacilityWallDegree",
    PropFacilityDisplay = "PropFacilityDisplay",
    PropFacilityStatue = "PropFacilityStatue",
    PropFacilityChair = "PropFacilityChair",
    PropFacilityCouch = "PropFacilityCouch",
    PropFacilityTable = "PropFacilityTable",
    PropFacilityChandelier = "PropFacilityChandelier",
    PropFacilityHangingLight = "PropFacilityHangingLight",
    PropFacilityDisplay2 = "PropFacilityDisplay2",
    PropFacilityChairFlip = "PropFacilityChairFlip",
    PropElevator = "PropElevator",
    PropReceptionDesk = "PropReceptionDesk",
    PropTallPlant = "PropTallPlant",
    PropFacilityDesk = "PropFacilityDesk",
    PropFacilityGlobeDroors = "PropFacilityGlobeDroors",
    PropFacilityDisplay3 = "PropFacilityDisplay3",
    GeyserGeneric_filthy_water = "GeyserGeneric_filthy_water",
    GeyserGeneric_hot_steam = "GeyserGeneric_hot_steam",
    GeyserGeneric_molten_gold = "GeyserGeneric_molten_gold",
    GeyserGeneric_hot_hydrogen = "GeyserGeneric_hot_hydrogen",
    SpiceVineSeed = "SpiceVineSeed",
    BasicFabricMaterialPlantSeed = "BasicFabricMaterialPlantSeed",
    StorageLocker = "StorageLocker",
    ColdBreatherSeed = "ColdBreatherSeed",
    MushroomSeed = "MushroomSeed",
    Meat = "Meat",
    DirtyIce = "DirtyIce",
    Katairite = "Katairite",
    FarmTile = "FarmTile",
    GasPermeableMembrane = "GasPermeableMembrane",
    InsulationTile = "InsulationTile",
    HydroponicFarm = "HydroponicFarm",
    MeshTile = "MeshTile",
    WireBridgeHighWattage = "WireBridgeHighWattage",
    MetalTile = "MetalTile",
    Iron = "Iron",
    GoldAmalgam = "GoldAmalgam",
    SedimentaryRock = "SedimentaryRock",
    Dirt = "Dirt",
    ToxicSand = "ToxicSand",
    SlimeMold = "SlimeMold",
    Water = "Water",
    Hatch = "Hatch",
    DigPlacer = "DigPlacer",
    Ladder = "Ladder",
    Bed = "Bed",
    Door = "Door",
    WashBasin = "WashBasin",
    LiquidPumpingStation = "LiquidPumpingStation",
    ManualGenerator = "ManualGenerator",
    ResearchCenter = "ResearchCenter",
    PacuEgg = "PacuEgg",
    GeyserGeneric_slush_water = "GeyserGeneric_slush_water",
    RoleStation = "RoleStation",
    MicrobeMusher = "MicrobeMusher",
    AdvancedResearchCenter = "AdvancedResearchCenter",
    MaficRock = "MaficRock",
    Regolith = "Regolith",
    EggShell = "EggShell",
    MassageTable = "MassageTable",
    MineralDeoxidizer = "MineralDeoxidizer",
    Mushroom = "Mushroom",
    SpiceNut = "SpiceNut",
    DreckoEgg = "DreckoEgg",
    SwampLilyFlower = "SwampLilyFlower",
    Generator = "Generator",
    BasicFabric = "BasicFabric",
    BatteryMedium = "BatteryMedium",
    Sculpture = "Sculpture",
    PuftAlpha = "PuftAlpha",
    Canvas = "Canvas",
    BottleEmptier = "BottleEmptier",
    Refrigerator = "Refrigerator",
    PacuBaby = "PacuBaby",
    SwampLilySeed = "SwampLilySeed",
    LiquidConduit = "LiquidConduit",
    LiquidPump = "LiquidPump",
    CO2Scrubber = "CO2Scrubber",
    LiquidConduitBridge = "LiquidConduitBridge",
    WaterPurifier = "WaterPurifier",
    AirFilter = "AirFilter",
    FlushToilet = "FlushToilet",
    InsulatedLiquidConduit = "InsulatedLiquidConduit",
    WashSink = "WashSink",
    FirePole = "FirePole",
    LiquidVent = "LiquidVent",
    GasPump = "GasPump",
    GasConduit = "GasConduit",
    RockCrusher = "RockCrusher",
    LiquidConduitRadiant = "LiquidConduitRadiant",
    LiquidLogicValve = "LiquidLogicValve",
    LogicPressureSensorGas = "LogicPressureSensorGas",
    LogicTemperatureSensor = "LogicTemperatureSensor",
    LiquidValve = "LiquidValve",
    HydrogenGenerator = "HydrogenGenerator",
    Snow = "Snow",
    BatterySmart = "BatterySmart",
    ThermalBlock = "ThermalBlock",
    ManualPressureDoor = "ManualPressureDoor",
    BleachStone = "BleachStone",
    FlowerVase = "FlowerVase",
    CreatureFeeder = "CreatureFeeder",
    RanchStation = "RanchStation",
    CreatureDeliveryPoint = "CreatureDeliveryPoint",
    GeyserGeneric_slimy_po2 = "GeyserGeneric_slimy_po2",
    GasFilter = "GasFilter",
    Electrolyzer = "Electrolyzer",
    GeyserGeneric_hot_po2 = "GeyserGeneric_hot_po2",
    GeyserGeneric_small_volcano = "GeyserGeneric_small_volcano",
    WireBridge = "WireBridge",
    HighWattageWire = "HighWattageWire",
    PowerTransformer = "PowerTransformer",
    GasConduitBridge = "GasConduitBridge",
    MedicalCot = "MedicalCot",
    DiningTable = "DiningTable",
    DirtyWater = "DirtyWater",
    Carbon = "Carbon",
    SuitLocker = "SuitLocker",
    SuitMarker = "SuitMarker",
    SuitFabricator = "SuitFabricator",
    PacuTropical = "PacuTropical",
    GasConduitRadiant = "GasConduitRadiant",
    LogicPressureSensorLiquid = "LogicPressureSensorLiquid",
    GasVent = "GasVent",
    LiquidHeater = "LiquidHeater",
    HatchHard = "HatchHard",
    LiquidConditioner = "LiquidConditioner",
    DreckoPlastic = "DreckoPlastic",
    Compost = "Compost",
    PressureDoor = "PressureDoor",
    EggIncubator = "EggIncubator",
    CeilingLight = "CeilingLight",
    LogicGateNOT = "LogicGateNOT",
    OilRefinery = "OilRefinery",
    MetalRefinery = "MetalRefinery",
    Polymerizer = "Polymerizer",
    RotPile = "RotPile",
    CookingStation = "CookingStation",
    GasVentHighPressure = "GasVentHighPressure",
    OilfloaterHighTemp = "OilfloaterHighTemp",
    GeyserGeneric_oil_drip = "GeyserGeneric_oil_drip",
    GeyserGeneric_hot_water = "GeyserGeneric_hot_water",
    GeyserGeneric_hot_co2 = "GeyserGeneric_hot_co2",
    HatchHardEgg = "HatchHardEgg",
    HatchVeggie = "HatchVeggie",
    MethaneGenerator = "MethaneGenerator",
    DreckoBaby = "DreckoBaby",
    WireRefined = "WireRefined",
    OilfloaterDecor = "OilfloaterDecor",
    IronOre = "IronOre",
    BasicPlantFood = "BasicPlantFood",
    HatchEgg = "HatchEgg",
    PacuTropicalEgg = "PacuTropicalEgg",
    PacuCleanerBaby = "PacuCleanerBaby",
    PacuCleaner = "PacuCleaner",
    OxyRock = "OxyRock",
    GasLogicValve = "GasLogicValve",
    SolidTransferArm = "SolidTransferArm",
    SolidConduitInbox = "SolidConduitInbox",
    FertilizerMaker = "FertilizerMaker",
    SolidConduit = "SolidConduit",
    SolidConduitBridge = "SolidConduitBridge",
    PuftEgg = "PuftEgg",
    StorageLockerSmart = "StorageLockerSmart",
    SolidConduitOutbox = "SolidConduitOutbox",
    LogicGateXOR = "LogicGateXOR",
    PuftBaby = "PuftBaby",
    PowerControlStation = "PowerControlStation",
    PetroleumGenerator = "PetroleumGenerator",
    PacuTropicalBaby = "PacuTropicalBaby",
    DustComet = "DustComet",
    PowerStationTools = "PowerStationTools",
    WireRefinedHighWattage = "WireRefinedHighWattage",
    DreckoPlasticEgg = "DreckoPlasticEgg",
    HatchVeggieEgg = "HatchVeggieEgg",
    LadderUnderConstruction = "LadderUnderConstruction",
    TileUnderConstruction = "TileUnderConstruction"
}
