import { useState } from "react";
import { cn } from "@/lib/utils";
import LineBreakText from "../LineBreakText";

/**
 * CategoryList — adapted from shadcn asset to Anwari Law design tokens.
 *
 * Tokens mapped:
 *   bg-background       → bg-cream-dark (section bg)
 *   bg-card             → bg-cream
 *   text-foreground     → text-ink
 *   text-muted-foreground → text-ink-muted
 *   border-border       → border-cream-darker
 *   border-primary / text-primary → border-gold / text-gold
 *   bg-primary/5        → bg-gold-subtle
 *   shadow-primary/20   → shadow-gold/20
 *   from-primary        → from-gold / to-gold-dark
 *   text-primary-foreground → text-white
 */

export const CategoryList = ({
  title,
  subtitle,
  categories,
  headerIcon,
  className,
}) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className={cn("w-full", className)}>
      {/* Header */}
      {(title || subtitle || headerIcon) && (
        <div className="text-center mb-10">
          {headerIcon && (
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-dark mb-6 text-white">
              {headerIcon}
            </div>
          )}
          {title && (
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-1">
              <LineBreakText text={title} />
            </h2>
          )}
          {subtitle && (
            <p className="font-serif text-3xl md:text-4xl text-ink-muted leading-tight">
              <LineBreakText text={subtitle} />
            </p>
          )}
        </div>
      )}

      {/* Category rows */}
      <div className="space-y-3">
        {categories.map((category) => {
          const isHovered = hoveredItem === category.id;
          return (
            <div
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={category.onClick}
            >
              <div
                className={cn(
                  "relative overflow-hidden border bg-cream cursor-pointer rounded-sm",
                  "transition-[height,border-color,background-color,box-shadow] duration-300 ease-in-out",
                  isHovered
                    ? "h-32 border-gold shadow-md shadow-gold/10 bg-gold-subtle"
                    : "h-20 border-cream-darker hover:border-gold/40"
                )}
              >
                {/* Corner bracket accents on hover */}
                {isHovered && (
                  <>
                    <div className="absolute top-3 left-3 w-6 h-6" aria-hidden="true">
                      <div className="absolute top-0 left-0 w-4 h-px bg-gold" />
                      <div className="absolute top-0 left-0 w-px h-4 bg-gold" />
                    </div>
                    <div className="absolute bottom-3 right-3 w-6 h-6" aria-hidden="true">
                      <div className="absolute bottom-0 right-0 w-4 h-px bg-gold" />
                      <div className="absolute bottom-0 right-0 w-px h-4 bg-gold" />
                    </div>
                  </>
                )}

                {/* Content */}
                <div className="flex items-center justify-between h-full px-6 md:px-8">
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "font-serif transition-colors duration-300",
                        category.featured
                          ? "text-xl md:text-2xl"
                          : "text-lg md:text-xl",
                        isHovered ? "text-gold-dark" : "text-ink"
                      )}
                    >
                      <LineBreakText text={category.title} />
                    </h3>
                    {category.subtitle && (
                      <p
                        className={cn(
                          "mt-1.5 font-sans text-sm transition-colors duration-300",
                          isHovered ? "text-ink-muted" : "text-ink-light"
                        )}
                      >
                        <LineBreakText text={category.subtitle} />
                      </p>
                    )}
                  </div>

                  {/* Icon — right side, fades in on hover */}
                  {category.icon && (
                    <div
                      className={cn(
                        "text-gold transition-opacity duration-300",
                        isHovered ? "opacity-100" : "opacity-0"
                      )}
                      aria-hidden="true"
                    >
                      {category.icon}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
