
"use strict";

let RawMagnetic = require('./RawMagnetic.js');
let Altimeter = require('./Altimeter.js');
let MotorPWM = require('./MotorPWM.js');
let RC = require('./RC.js');
let VelocityZCommand = require('./VelocityZCommand.js');
let ThrustCommand = require('./ThrustCommand.js');
let MotorCommand = require('./MotorCommand.js');
let VelocityXYCommand = require('./VelocityXYCommand.js');
let HeadingCommand = require('./HeadingCommand.js');
let ControllerState = require('./ControllerState.js');
let HeightCommand = require('./HeightCommand.js');
let ServoCommand = require('./ServoCommand.js');
let Compass = require('./Compass.js');
let RawRC = require('./RawRC.js');
let MotorStatus = require('./MotorStatus.js');
let PositionXYCommand = require('./PositionXYCommand.js');
let YawrateCommand = require('./YawrateCommand.js');
let Supply = require('./Supply.js');
let AttitudeCommand = require('./AttitudeCommand.js');
let RuddersCommand = require('./RuddersCommand.js');
let RawImu = require('./RawImu.js');
let TakeoffResult = require('./TakeoffResult.js');
let LandingActionResult = require('./LandingActionResult.js');
let PoseActionGoal = require('./PoseActionGoal.js');
let PoseActionFeedback = require('./PoseActionFeedback.js');
let PoseActionResult = require('./PoseActionResult.js');
let LandingGoal = require('./LandingGoal.js');
let LandingFeedback = require('./LandingFeedback.js');
let TakeoffActionFeedback = require('./TakeoffActionFeedback.js');
let TakeoffGoal = require('./TakeoffGoal.js');
let LandingActionFeedback = require('./LandingActionFeedback.js');
let TakeoffActionGoal = require('./TakeoffActionGoal.js');
let LandingAction = require('./LandingAction.js');
let PoseResult = require('./PoseResult.js');
let PoseAction = require('./PoseAction.js');
let TakeoffActionResult = require('./TakeoffActionResult.js');
let PoseFeedback = require('./PoseFeedback.js');
let TakeoffAction = require('./TakeoffAction.js');
let LandingResult = require('./LandingResult.js');
let TakeoffFeedback = require('./TakeoffFeedback.js');
let LandingActionGoal = require('./LandingActionGoal.js');
let PoseGoal = require('./PoseGoal.js');

module.exports = {
  RawMagnetic: RawMagnetic,
  Altimeter: Altimeter,
  MotorPWM: MotorPWM,
  RC: RC,
  VelocityZCommand: VelocityZCommand,
  ThrustCommand: ThrustCommand,
  MotorCommand: MotorCommand,
  VelocityXYCommand: VelocityXYCommand,
  HeadingCommand: HeadingCommand,
  ControllerState: ControllerState,
  HeightCommand: HeightCommand,
  ServoCommand: ServoCommand,
  Compass: Compass,
  RawRC: RawRC,
  MotorStatus: MotorStatus,
  PositionXYCommand: PositionXYCommand,
  YawrateCommand: YawrateCommand,
  Supply: Supply,
  AttitudeCommand: AttitudeCommand,
  RuddersCommand: RuddersCommand,
  RawImu: RawImu,
  TakeoffResult: TakeoffResult,
  LandingActionResult: LandingActionResult,
  PoseActionGoal: PoseActionGoal,
  PoseActionFeedback: PoseActionFeedback,
  PoseActionResult: PoseActionResult,
  LandingGoal: LandingGoal,
  LandingFeedback: LandingFeedback,
  TakeoffActionFeedback: TakeoffActionFeedback,
  TakeoffGoal: TakeoffGoal,
  LandingActionFeedback: LandingActionFeedback,
  TakeoffActionGoal: TakeoffActionGoal,
  LandingAction: LandingAction,
  PoseResult: PoseResult,
  PoseAction: PoseAction,
  TakeoffActionResult: TakeoffActionResult,
  PoseFeedback: PoseFeedback,
  TakeoffAction: TakeoffAction,
  LandingResult: LandingResult,
  TakeoffFeedback: TakeoffFeedback,
  LandingActionGoal: LandingActionGoal,
  PoseGoal: PoseGoal,
};
