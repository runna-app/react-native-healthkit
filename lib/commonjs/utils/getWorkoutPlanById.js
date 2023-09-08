"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function getWorkoutPlanById(workoutUUID) {
  return _nativeTypes.default.getWorkoutPlanById(workoutUUID);
}
var _default = getWorkoutPlanById;
exports.default = _default;
//# sourceMappingURL=getWorkoutPlanById.js.map