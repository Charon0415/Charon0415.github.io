// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	ASUS: [
		{
			name: "华硕天选4Plus",
			image: "/images/device/tx4p.png",
			specs: "Gray / 16G + 1TB",
			description:
				"For game and work",
			link: "https://www.asus.com.cn/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-f17-2023/",
		},
	],
	
};
