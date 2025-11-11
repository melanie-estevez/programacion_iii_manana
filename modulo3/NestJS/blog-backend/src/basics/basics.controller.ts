import { Controller, Get, Param, Post, Body,Put, Delete} from '@nestjs/common';
import { BasicsService } from './basics.service';

@Controller('basics')
export class BasicsController {
    constructor(private readonly bassicsService:BasicsService){}
      
    @Get()
    getMyFirstGet(): object{
        return this.bassicsService.getMyFirstGet();
    }
    
    @Get(':parametro')
    getConParametros(@Param('parametro') parametro:string){
        return this.bassicsService.getConParametros(parametro);
    }

    @Post()
    create(@Body() bodyPost: object){
        return this.bassicsService.postFunction(bodyPost);
    }

    @Put(':id')
    update(@Body() bodyPost: object, 
    @Param('id') id: string
    ){
        return this.bassicsService.putFunction(bodyPost,id);
    }    

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.bassicsService.deleteFunction(id);
    }
}
