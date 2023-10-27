interface Club {
    id: string;
    title: string;
    highlightedWord: string;
    description: string;
    image: string;
    termHighlights: TermHighlight[];
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    buttonColor: string;
}

interface TermHighlight {
    title: string;
    description: string;
}

export let CLUBS: Club[] = [
    {
        id: "bushcraft",
        title: "Bushcraft Adventures After-School Club",
        highlightedWord: "Bushcraft",
        description: "Calling all young adventurers and nature lovers! Get ready for a journey of a lifetime as we dive headfirst into the heart of the forest. \"Bushcraft Adventures\" isn't your average after-school club – it's a thrilling wilderness extravaganza that will transform you into a trailblazing explorer. Imagine building your own forest hideaways, mastering the art of orienteering, and cooking up mouthwatering campfire feasts. From tracking wildlife to navigating like a pro, this is where you'll discover the secrets of the wild, make lifelong friends, and ignite your love for nature like never before. Parents, prepare for your child to become a confident, capable, and wild-at-heart adventurer. Kids, get ready to uncover, create, and explore in the most exciting way possible. Enrol today, and let the forest fun begin!",
        image: "https://cdn.midjourney.com/c8455164-ae28-480a-a5b4-67f573a803eb/0_2.webp",
        termHighlights: [
            {
                title: "Shelter Building",
                description: "Over the course of the term, students will master the art of constructing wilderness shelters. They'll learn how to create sturdy, weather-resistant abodes using natural materials found in the forest. From cosy leafy lean-tos to spacious debris huts, our young adventurers will discover the secrets of crafting safe and comfortable sanctuaries in the wild.",
            },
            {
                title: "Firecraft",
                description: "Fire is not only a source of warmth but also a vital survival skill. Our students will become fire-making experts, learning various techniques like fire-by-friction and fire-by-spark. They'll practice fire safety and responsibility while mastering the ancient art of kindling flames from the forest's resources. (*site dependent)",
            },
            {
                title: "Wild Edibles and Foraging",
                description: "Nature provides an abundance of edible plants and resources. We'll teach kids how to identify safe, nutritious wild edibles and how to sustainably harvest them. They'll discover the thrill of finding food in the forest and gain a deeper appreciation for the environment.",
            },
            {
                title: "Navigation and Orienteering",
                description: "In the world of bushcraft, knowing where you are is crucial. Students will learn how to use maps, compasses, and natural landmarks for navigation. They'll embark on treasure hunts and orienteering challenges, sharpening their outdoor navigation skills.",
            },
            {
                title: "Outdoor Cooking",
                description: "Cooking over an open fire is a memorable experience. Our young adventurers will prepare delicious meals using bushcraft techniques. They'll cook with cast-iron pans, make damper bread, and enjoy campfire cuisine they've prepared themselves. (*site dependent)",
            },
            {
                title: "Wildlife Tracking",
                description: "Uncover the secrets of the forest's inhabitants through wildlife tracking. Students will learn to identify animal prints, signs, and behaviors. They'll embark on tracking expeditions, honing their observation and detective skills while connecting with the natural world.",
            },
            {
                title: "Knot Tying and Campcraft",
                description: "Knots are essential in bushcraft. Kids will master various knots and lashings for shelter construction, crafting tools, and more. They'll also learn campcraft skills like setting up camp, purifying water, and Leave No Trace principles.",
            },
            {
                title: "Nature Awareness",
                description: "Encourage mindfulness and awareness of the environment. Students will engage in sensory activities, sit-spots, and nature journaling to connect deeply with the forest and its inhabitants.",
            }
        ],
        primaryColor: "#49190A",
        secondaryColor: "#ff54224a",
        tertiaryColor: "#FFA185",
        buttonColor: "#ffd0c2",

    },
    {
        id: "nature-explorers",
        title: "Nature Explorers After-School Club",
        highlightedWord: "Nature Explorers",
        description: "Calling all young adventurers! Dive into the world of nature right within our school's outdoor sanctuary with \"Nature Explorers After-School Club.\" Designed for ages 8-12, this exciting program takes students on a journey of discovery, from unravelling the mysteries of climate change to nurturing eco-friendly practices in our outdoor space. With hands-on exploration, creative projects, mini eco-experiments, and outdoor adventures, your child will become an environmental champion, showcasing their eco-initiatives to the school community. Enrol today and let your child be part of an inspiring mission to connect with and protect our precious environment, right in our school's backyard!",
        image: "https://cdn.midjourney.com/ad3d4b5c-911f-46a2-bbba-2af199871ded/0_1.webp",
        termHighlights: [
            {
                title: "Environmental Exploration",
                description: "Our journey begins by immersing students in the outdoor environment of our school grounds...",
            },
            {
                title: "Climate Change Basics",
                description: "We'll start by breaking down the science of climate change in a relatable way...",
            },
            {
                title: "Sustainable Practices at School",
                description: "Students will investigate how our school can become more eco-friendly...",
            },
            {
                title: "Local Biodiversity",
                description: "Despite our restricted space, we'll examine the biodiversity present on our school grounds...",
            },
            {
                title: "Nature-Based Art and Communication",
                description: "To foster creativity and environmental awareness, students will engage in art projects and nature-inspired storytelling...",
            },
            {
                title: "Mini Eco-Experiments",
                description: "With the limited space available, students will conduct mini eco-experiments to explore topics like water quality, soil health...",
            },
            {
                title: "Environmental Action",
                description: "Empowerment is at the core of our program. Students will brainstorm and execute small-scale environmental projects within our school's outdoor space...",
            },
            {
                title: "Outdoor Adventures",
                description: "We'll make the most of our outdoor facilities with guided hikes, bird-watching, and other nature-related activities that foster a deep connection to the environment...",
            },
        ],
        primaryColor: "#054900",
        secondaryColor: "#BFFFBA",
        tertiaryColor: "#69FF93",
        buttonColor: "#BFFFBA",
    },
    {
        id: "tools-tinkerers",
        title: "Tool Tinkerers After-School Club",
        highlightedWord: "Tool Tinkerers",
        description: "Get ready to ignite your child's inner builder and adventurer with the \"Tool Tinkerers After-School Club\"! Designed for budding creators aged 8-12, this electrifying program unfolds in the secure outdoor spaces of our school, offering a thrilling journey of discovery through hands-on tool exploration and outdoor crafting. From wielding hammers and saws to crafting birdhouses, sculpting natural art, and tackling mini construction challenges, your child will unleash their creativity and master essential life skills while having a blast. Safety, craftsmanship, and the wonders of nature converge in a dynamic outdoor classroom where every week is a new adventure. Join us and watch your child's imagination come to life in a world of tools, teamwork, and endless fun!",
        image: "https://cdn.midjourney.com/98b51b36-2a6f-47c0-8e99-4640dfc9cb04/0_2.webp",
        termHighlights: [
            {
                title: "Tool Introduction",
                description: "The club begins with a safe and age-appropriate introduction to various outdoor tools. Students will learn about the proper use and handling of tools like hammers, saws, drills, and more under the guidance of our experienced instructors.",
            },
            {
                title: "Building Adventures",
                description: "Armed with newfound knowledge, students will embark on a series of building adventures using outdoor tools. From crafting birdhouses to assembling simple outdoor furniture, they'll put their skills to the test while creating functional outdoor items.",
            },
            {
                title: "Natural Art Projects",
                description: "Our outdoor spaces provide a canvas for creativity. Students will use tools to collect and shape natural materials into artful creations, such as wooden sculptures, leafy mosaics, and natural wind chimes.",
            },
            {
                title: "Tool Safety and Maintenance",
                description: "Safety is paramount. Students will not only learn how to use tools but also how to maintain and store them properly. These skills promote responsibility and a lifelong understanding of tool care.",
            },
            {
                title: "Mini Construction Challenges",
                description: "Within our school's outdoor settings, students will engage in friendly competitions and challenges, such as building bridges, creating mini treehouses, and constructing miniature gardens. These activities promote problem-solving and teamwork.",
            },
            {
                title: "Nature Engineering",
                description: "Students will explore how outdoor tools can be used to engineer solutions to nature-related challenges. This might include creating erosion control structures, wildlife shelters, or simple water management systems.",
            },
            {
                title: "Outdoor Classroom",
                description: "Our school's outdoor spaces will serve as an extension of the classroom, providing a unique environment for hands-on learning. Students will engage in discussions and interactive lessons, further enhancing their understanding of the tools and their applications.",
            },
            {
                title: "Nature Appreciation",
                description: "Throughout the term, students will also have time for exploration and appreciation of the natural world within our school grounds. They'll learn about local plants, insects, and wildlife, fostering a deeper connection to nature.",
            },
        ],
        primaryColor: "#000000",
        secondaryColor: "#E1E1E1",
        tertiaryColor: "#cdcdcd",
        buttonColor: "#FFFFFF",
    },
    {
        id: "nature-explorers-mini",
        title: "Nature Explorers Mini Club",
        highlightedWord: "Nature Explorers Mini",
        description: "Calling all young adventurers aged 5-7 and their parents - get ready for a wild and wonderful journey into the great outdoors with our \"Nature Explorers Mini Club\"! Designed to spark curiosity and wonder, this thrilling program invites our littlest explorers to dive headfirst into the natural world right within the safe and nurturing embrace of our school's outdoor spaces. From exciting scavenger hunts and animal tracking to captivating outdoor storytime and hands-on nature art, your child will embark on a magical adventure of discovery, creativity, and outdoor play. Join us, and watch as your child's love for nature blossoms in a world of outdoor fun, picnics, and unforgettable celebrations!",
        image: "https://cdn.midjourney.com/51fc633b-61eb-4d2c-a8c8-0aa5708b21ac/0_2.webp",
        termHighlights: [
            {
                title: "Nature Scavenger Hunts",
                description: "Our adventures begin with nature scavenger hunts where students explore the school's outdoor spaces to find natural treasures such as leaves, rocks, and pinecones. It's a delightful introduction to the world of outdoor exploration.",
            },
            {
                title: "Animal Tracking",
                description: "Kids will learn about animal tracks and footprints, getting a taste of wildlife identification. They'll use plaster to make casts of tracks they discover in our outdoor areas.",
            },
            {
                title: "Outdoor Storytime",
                description: "Gathered in a cozy outdoor reading corner, students will enjoy outdoor-themed storytime sessions. These stories will spark their imaginations and deepen their connection to the natural world.",
            },
            {
                title: "Mini Nature Art",
                description: "Using materials gathered from our school's outdoor spaces, students will create simple nature-inspired art projects. From leaf rubbings to pinecone animals, their creativity will flourish.",
            },
            {
                title: "Planting Adventures",
                description: "Kids will experience the magic of planting and growing as they participate in simple gardening activities. They'll plant flowers, herbs, or vegetables and learn about the care and nurturing of living things.",
            },
            {
                title: "Outdoor Play and Games",
                description: "Our outdoor spaces will serve as a playground for active games and playtime. Games like nature-themed hide-and-seek, tag, and relay races will keep young bodies moving and engaged.",
            },
            {
                title: "Insect Exploration",
                description: "Students will learn about the fascinating world of insects through observation and gentle handling of friendly bugs found in our outdoor areas. They'll develop an early appreciation for the small creatures that share our world.",
            },
            {
                title: "Outdoor Picnics",
                description: "Embracing the great outdoors, we'll have picnics in our school's outdoor spaces. Children will enjoy simple, healthy snacks while connecting with nature and each other.",
            },
        ],
        primaryColor: '#493800',
        secondaryColor: '#fff9ba',
        tertiaryColor: '#fff052',
        buttonColor: '#fffbd7'
    }
]