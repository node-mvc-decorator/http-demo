import {Controller1} from "./src/controller1";
import {Controller2} from "./src/controller2";
import {app} from "@node-mvc-decorator/http";

app(Controller1, Controller2).listen(3001);
