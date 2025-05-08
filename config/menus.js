import {
  Application,
  Chart,
  Components,
  DashBoard,
  Stacks2,
  Settings,
  Map,
  Grid,
  Files,
  Graph,
  ClipBoard,
  Cart,
  Envelope,
  Messages,
  Monitor,
  ListFill,
  Calendar,
  List,
  Flag,
  Book,
  Note,
  ClipBoard2,
  Note2,
  Note3,
  BarLeft,
  BarTop,
  ChartBar,
  PretentionChartLine,
  PretentionChartLine2,
  Google,
  Pointer,
  Map2,
  MenuBar,
  Icons,
  ChartArea,
  Building,
  Building2,
  Sheild,
  Error,
  Diamond,
  Heroicon,
  LucideIcon,
  CustomIcon,
  Mail,
} from "@/components/svg";

export const menusConfig = {
  mainNav: [
    {
      title: "Dashboard",
      icon: DashBoard,
      child: [
        {
          title: "Dashboard",
          href: "/dashboard",
          icon: Graph,
        },
        {
          title: "Ecommerce",
          href: "/ecommerce",
          icon: Cart,
        },
        {
          title: "project ",
          href: "/project",
          icon: ClipBoard,
        },
      ],
    },

    {
      title: "chat",
      icon: Messages,
      href: "/chat",
    },
    {
      title: "email",
      icon: Envelope,
      href: "/email",
    },
    {
      title: "kanban",
      icon: Monitor,
      href: "/kanban",
    },
    {
      title: "task",
      icon: ListFill,
      href: "/task",
    },
    {
      title: "calendar",
      icon: Calendar,
      href: "/calendar",
    },

    {
      title: "Project",
      icon: List,
      child: [
        {
          title: "project List",
          icon: List,
          href: "/projects",
        },
        {
          title: "project Details",
          icon: Note3,
          href: "/projects/1/overview",
        },
      ],
    },

    {
      title: "Settings",
      icon: Settings,
      child: [
        {
          title: "General",
          href: "/general",
          icon: Note3,
        },
        {
          title: "Security",
          href: "/security",
          icon: Note3,
        },
        {
          title: "Customizer",
          href: "/customizer",
          icon: Note3,
        },
        {
          title: "Website SEO",
          href: "/website-seo",
          icon: Note3,
        },
        {
          title: "Plans",
          href: "/plans",
          icon: Note3,
        },
        {
          title: "Payment Methods",
          href: "/payment-methods",
          icon: Note3,
        },
      ]
    },
  ],

  sidebarNav: {
    modern: [
      {
        title: "Dashboard",
        icon: DashBoard,
        child: [
          {
            title: "Dashboard",
            href: "/dashboard",
            icon: Graph,
          },
          {
            title: "Ecommerce",
            href: "/ecommerce",
            icon: Cart,
          },
          {
            title: "project ",
            href: "/project",
            icon: ClipBoard,
          },
        ],
      },

      {
        title: "chat",
        icon: Messages,
        href: "/chat",
      },
      {
        title: "email",
        icon: Envelope,
        href: "/email",
      },
      {
        title: "kanban",
        icon: Monitor,
        href: "/kanban",
      },
      {
        title: "task",
        icon: ListFill,
        href: "/task",
      },
      {
        title: "calendar",
        icon: Calendar,
        href: "/calendar",
      },

      {
        title: "Project",
        icon: List,
        child: [
          {
            title: "project List",
            icon: List,
            href: "/projects",
          },
          {
            title: "project Details",
            icon: Note3,
            href: "/projects/1/overview",
          },
        ],
      },
  
      {
        title: "Settings",
        icon: Settings,
        child: [
          {
            title: "General",
            href: "/general",
            icon: Note3,
          },
          {
            title: "Security",
            href: "/security",
            icon: Note3,
          },
          {
            title: "Customizer",
            href: "/customizer",
            icon: Note3,
          },
          {
            title: "Website SEO",
            href: "/website-seo",
            icon: Note3,
          },
          {
            title: "Plans",
            href: "/plans",
            icon: Note3,
          },
          {
            title: "Payment Methods",
            href: "/payment-methods",
            icon: Note3,
          },
        ]
      },
    ],

    classic: [
      {
        title: "Dashboard",
        icon: DashBoard,
        child: [
          {
            title: "Dashboard",
            href: "/dashboard",
            icon: Graph,
          },
          {
            title: "Ecommerce",
            href: "/ecommerce",
            icon: Cart,
          },
          {
            title: "project ",
            href: "/project",
            icon: ClipBoard,
          },
        ],
      },

      {
        title: "chat",
        icon: Messages,
        href: "/chat",
      },
      {
        title: "email",
        icon: Envelope,
        href: "/email",
      },
      {
        title: "kanban",
        icon: Monitor,
        href: "/kanban",
      },
      {
        title: "task",
        icon: ListFill,
        href: "/task",
      },
      {
        title: "calendar",
        icon: Calendar,
        href: "/calendar",
      },

      {
        title: "Project",
        icon: List,
        child: [
          {
            title: "project List",
            icon: List,
            href: "/projects",
          },
          {
            title: "project Details",
            icon: Note3,
            href: "/projects/1/overview",
          },
        ],
      },
  
      {
        title: "Settings",
        icon: Settings,
        child: [
          {
            title: "General",
            href: "/general",
            icon: Note3,
          },
          {
            title: "Security",
            href: "/security",
            icon: Note3,
          },
          {
            title: "Customizer",
            href: "/customizer",
            icon: Note3,
          },
          {
            title: "Website SEO",
            href: "/website-seo",
            icon: Note3,
          },
          {
            title: "Plans",
            href: "/plans",
            icon: Note3,
          },
          {
            title: "Payment Methods",
            href: "/payment-methods",
            icon: Note3,
          },
        ]
      },
    ],
  },
};
