import Logger from "licia/Logger";

let logger;

export default logger = new Logger(
	"[Eruda]",
	ENV === "production" ? "warn" : "debug"
);

logger.formatter = function (type, argList) {
	argList.unshift(this.name);

	return argList;
};
