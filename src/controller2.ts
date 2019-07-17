import {Service2} from "./service2";
import {Controller, GetMapping, RequestMapping, RequestMethod, RequestParam, RequestBody} from "@node-mvc-decorator/core";

@Controller
@RequestMapping('controller2')
export class Controller2 {

    constructor(private service2: Service2) {}

    @GetMapping({path: '/'})
    testGet1(@RequestParam('a') a: string) {
        this.service2.test();
        return {a: 'hello world'};
    }
    @RequestMapping({path: 'test', params: ['a=1', 'b'], method: [RequestMethod.GET, RequestMethod.POST]})
    test(@RequestBody body: any) {
        return 'hello world';
    }

}
