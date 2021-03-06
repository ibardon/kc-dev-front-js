import { NotificationController } from "../shared/notification/NotificationController.js";
import { AdListController } from "./AdListController.js";

document.addEventListener("DOMContentLoaded", async () => {
  const adsListElement = document.querySelector(".ad-list");

  const notificationElement = document.querySelector(".notification");

  const notificationController = new NotificationController(
    notificationElement
  );

  const adListController = new AdListController(adsListElement);
  await adListController.showAds();
});
