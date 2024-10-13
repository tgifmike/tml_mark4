'use client'

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useTheme } from 'next-themes';

export function ThemeSettings() {
    const { setTheme } = useTheme();
    return (
			<main className="p-6">
				<div className='p-4 border rounded-2xl shadow-xl'>
					<h3 className="text-xl">Theme Settings</h3>
					<RadioGroup defaultValue="comfortable">
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="light"
								id="r1"
								onClick={() => setTheme('light')}
							/>
							<Label htmlFor="r1">Light</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="dark"
								id="r2"
								onClick={() => setTheme('dark')}
							/>
							<Label htmlFor="r2">Dark</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="system"
								id="r3"
								onClick={() => setTheme('system')}
							/>
							<Label htmlFor="r3">System</Label>
						</div>
					</RadioGroup>
				</div>
			</main>
		);
}
