# 以撒的结合 网页版 · 全成就 + mod 配置分享包

## 这是什么
在网页版以撒（https://chiikabu.github.io/the-browsing-of-isaac/）里，一次性装好：
  - 3 个全成就存档：成就 641/641、角色全开、挑战全开、
    Eden 代币 99999、捐款机和贪婪捐款机各 888
  - 游戏设置：已开启控制台（按 ` 键，英文输入法下按住半秒）；
    渲染倍数 1（更流畅，画面略糊）；关闭了游戏自带的英文道具说明框，改看 EID 的中文
  - 35 个 mod（清单见最后），按网页版的性能挑过
  - EID 道具说明：简体中文，并做了降耗（刷新率 10、战斗中自动隐藏）
  - GoodTrip（Tab+鼠标点小地图传送）已按 HUD 偏移校准，点得准

注意：导入会覆盖你浏览器里原有的以撒存档，并清掉未打完的对局。
网页版运行的是游戏原版内容，建议自己也拥有正版《以撒的结合：忏悔》。


## 方式一：一键脚本（推荐）
1. 用 Chrome 或 Edge 打开这个地址（是一张小图标，不是游戏页面）：
     https://chiikabu.github.io/the-browsing-of-isaac/favicon-32.png
   同时确认没有开着任何以撒游戏页面。
2. 按 F12（Mac 是 Option+Command+J）打开开发者工具，切到「Console / 控制台」。
3. 打开本仓库的 [isaac-setup.js](isaac-setup.js)（点右上角 Raw 再全选复制），全选复制，粘贴到控制台，回车。
   - Chrome 第一次粘贴会提示不允许粘贴，按提示输入 allow pasting 回车后再粘贴。
   - 这是正常的安全提醒：只运行你信任的人给的代码。脚本是明文，可以先看看内容。
4. 弹窗点「确定」，等它跑完（要下载 mod，约 1-2 分钟），最后会弹出「完成」。
   已经跑过旧版脚本的人也可以再跑一次：装过的 mod 会跳过，
   并会关掉这版不再推荐的 mod、补上修补和新设置。
5. 打开 https://chiikabu.github.io/the-browsing-of-isaac/?touch=0 开始玩
   （?touch=0 防止网页误判成手机、出现虚拟摇杆）。


## 方式二：手动导入（不想粘代码时）
1. 打开 https://chiikabu.github.io/the-browsing-of-isaac/?saves=1
2. 右上角点 Saves → Import…，选 [isaac-saves-backup.zip](isaac-saves-backup.zip)，再点 Reload to apply。
3. 进游戏后，在主菜单 MODS → MOD BROWSER（按 B），按下面的清单逐个搜索安装。
4. 这种方式 EID 是英文、GoodTrip 点小地图会偏。建议用方式一。


## Mac 用户可选：Command 和 Control 互换
如果你在系统里把 Command/Control 互换了，想让游戏里也跟着换：
装 Tampermonkey 扩展（Chrome 里要打开扩展详情里的「允许用户脚本」），
新建脚本，粘贴 [isaac-swap-cmd-ctrl.user.js](isaac-swap-cmd-ctrl.user.js) 的内容（或者直接点开它的 Raw 链接，Tampermonkey 会弹出安装页）保存即可。


## 常见问题
- 导入后没生效：多半是导入时游戏页面还开着，退出时把旧存档写回去了。
  关掉所有游戏页面，重新导入一次。
- 进游戏一开始就崩、报 _invalid_parameter：某个存档位里有「mod 组合不一样」的
  未打完对局。重新跑一次方式一的脚本会自动清掉。
- 水层/矿层秘密出口崩溃：是 Angels Drop Items 这个 mod 的 bug，本包已不再安装它；
  旧版装过的，脚本会把它关掉并修补。
- 走不动：多半是中文输入法吃掉了 WASD，切到英文输入法。
- 掉帧：火堆、水面多的房间是网页版模拟光照的开销，把浏览器窗口缩小一点（不全屏）有帮助；
  按 F2 可临时隐藏 EID。游戏本身上限 60 帧（逻辑每秒 30 次），显示 60 就是满帧。


## mod 清单（35 个）
  - Door Overhaul
  - Better Wizoobs!
  - Visible Options!
  - Cooler Completion Marks [REP+]
  - Deal Visual Change
  - drop trinkets faster
  - Enhanced Boss Bars
  - External item descriptions
  - GoodTrip
  - Hush Now Drops Eden's Blessing
  - Instant Fires and Poops
  - Instant Restart
  - [REP(+)] Laser Ludovico Fix
  - No Jam
  - No More Hidden Enemies
  - NO CURSES
  - No Empty Pedestals
  - Planetarium Chance [REP+]
  - pog for good pills
  - POG for Good Items
  - "?" Marked Tinted Rocks
  - Range fix for Bag of Crafting
  - Range fix for Bones & Sword
  - Rare Secret Rooms
  - (REP) Faster Animations
  - (REP) Improved Chargebar
  - Simple FPS Counter
  - Spindown Dice Preview (Reupload)
  - Stats+
  - There's No Rush
  - TimeMachine
  - cry
  - unintrusive pause menu
  - Unique Coins
  - Visible Challenge Unlocks

---
本仓库不包含任何游戏程序或素材，只有存档、设置和配置脚本。mod 由网页版自己的 mod 库下载。
