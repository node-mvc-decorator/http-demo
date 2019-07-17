import {Service1} from "./service1";
import {Autowired, Controller, GetMapping} from "@node-mvc-decorator/core";

@Controller
export class Controller1 {

    @Autowired({type: Service1})
    service1: Service1;

    @GetMapping
    testGet() {
        console.log(123231123);
        return 'wer';
    }

}
