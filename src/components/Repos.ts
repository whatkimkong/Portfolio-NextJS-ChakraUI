interface Repos {
    title: string;
    description: string;
    status: string;
    serverUrl?: string;
    clientUrl?: string;
    repoUrl?: string;
    image: string;
    githubImage?: string;
}

export const Repos: Repos[] = [
        {
          title: "You're on one already! Yes! Tis' Kim's Portfolio",
          description: "My Portfolio showcasing the behind the scene builds and the variety of designs, welcome to gander",
          status: "pre-launch",
          repoUrl: "https://github.com/whatkimkong/Portfolio-NextJS-ChakraUI",
          image:
            "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
        {
          title: "Howdiy",
          description:
            "A community-building app surrounding natural DIY recipes, pair-programmed and conceptualised by myself and @emballeur",
          status: "pre-launch",
          serverUrl: "https://github.com/emballeur/howdiy-server",
          clientUrl: "https://github.com/emballeur/howdiy-client",
          githubImage:
            "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          image:
            "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        },
        {
          title: "KanKan",
          description: "",
          status: "pre-launch",
          repoUrl: "",
          image:
            "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
        {
          title: "Haiku",
          description: "",
          status: "pre-launch",
          serverUrl: "",
          clientUrl: "",
          image:
            "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
        {
          title: "Empress Voroti",
          description: "",
          status: "pre-launch",
          repoUrl: "",
          image:
            "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        }
      ]

export default Repos;