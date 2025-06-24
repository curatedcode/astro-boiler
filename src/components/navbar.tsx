import { buttonVariants } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

function Navbar({ pathname }: { pathname: string }) {
  const isHomepage = pathname === "/";

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
      <a href="/" title="Home" className="flex gap-2">
        <img
          src="/assets/icons/favicon.svg"
          height={32}
          width={32}
          alt="SITE_TITLE Logo"
          className="size-8"
        />
        <div className="font-display">SITE_TITLE</div>
      </a>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <a href={isHomepage ? "#features" : "/#features"}>Features</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <a href="/pricing">Pricing</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <a href="/help">Help</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <a href="/login" className={buttonVariants({ variant: "ghost" })}>
          Login
        </a>
        <a
          href="/signup"
          className={buttonVariants({
            className: "bg-accent-brand px-3 py-1.5",
          })}
        >
          Signup
        </a>
      </div>
    </div>
  );
}

export { Navbar };
