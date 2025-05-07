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
          title: "Project ",
          href: "/project",
          icon: ClipBoard,
        },
      ],
    },

    {
      title: "Application",
      icon: Application,
      child: [
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
          title: "project",
          icon: ClipBoard,
          href: "/projects",
        },
      ],
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
        title: "project List",
        icon: ClipBoard,
        href: "/projects",
      },
      {
        title: "project Details",
        icon: ClipBoard,
        href: "/projects/1/overview",
      },

      {
        title: "Settings",
        icon: Settings,
        href: "/setting"
      }
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
        title: "project List",
        icon: ClipBoard,
        href: "/projects",
      },
      {
        title: "project Details",
        icon: ClipBoard,
        href: "/projects/1/overview",
      },

      {
        title: "Settings",
        icon: Settings,
        href: "/setting"
      }
    ],
  },
};
