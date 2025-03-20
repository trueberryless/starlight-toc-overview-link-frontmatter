import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware(async (context, next) => {
  try {
    const { entry } = context.locals.starlightRoute;
    const overviewLink = context.locals.starlightRoute.toc?.items[0];
    if (overviewLink && entry.data.overviewTitle) {
      overviewLink.text = entry.data.overviewTitle;
    }
  } catch (e) {}
  return next();
});
