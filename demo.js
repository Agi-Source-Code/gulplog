var logger = require("./index");

// logs strings
logger.debug("The MOST verbose!");
logger.info("Some important info");
logger.warn("All the warnings to you");
// logger.error("OH NO! SOMETHING HAPPENED!");

// supports util.format!
logger.info("%s style!", "printf");

// log anything
logger.debug({ my: "obj" });
logger.info([1, 2, 3]);
