import { Component, OnInit, ViewChild } from '@angular/core';
import { SystemService } from './../../system.service';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss']
})
export class HeadbarComponent implements OnInit {

  constructor(private systemService: SystemService) { }

  ngOnInit() {

  }

  //修改系统主题
  changeTheme() { }

  //修改菜单尺寸
  changeMenuSize() {
    this.systemService.menuSetting.size = (this.systemService.menuSetting.size == 'sm' ? 'lg' : 'sm')
  }

  //获取查询结果
  searchList(datas: Array<{ icon: string, title: string, url: string }>): Array<any> {
    return !this.search ? [] : datas.filter(e => e.title.indexOf(this.search) >= 0)
  }

  //查询关键词
  search = ""

  //弹出搜索结果
  canShowSearchPad = false

  //系统菜单配置参数
  menuSetting = this.systemService.menuSetting

  //系统主题配置参数
  theme: any = this.systemService.theme

  //系统菜单
  menus: Array<any> = []

  //搜索结果面板
  @ViewChild('navList') searcListPad: any
}
