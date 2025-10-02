import { Button } from '@/components/ui/Button';
import { shortenAddress } from '@/lib/utils';

export function WalletDisplay({
    isConnected,
    isConnecting,
    address,
    bnbBalance,
    handleConnect,
    handleDisconnect,
}: {
    isConnected: boolean;
    isConnecting: boolean;
    address: string | undefined;
    bnbBalance: number;
    handleConnect: () => Promise<void>;
    handleDisconnect: () => void;
}) {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            {isConnected ? (
                <>
                    <div className="flex items-center gap-2 sm:gap-3 bg-gray-900 px-2 sm:px-3 py-1 sm:py-2 rounded-lg w-full sm:w-auto">
                        <span className="text-green-400 text-xs sm:text-sm">
                            BNB: {bnbBalance.toFixed(4)}
                        </span>
                        <Button
                            variant="outline"
                            onClick={handleDisconnect}
                            className="text-xs sm:text-sm"
                        >
                            Disconnect
                        </Button>
                        <span className="text-gray-400 text-xs truncate max-w-[80px] sm:max-w-[120px]">
                            {address ? shortenAddress(address) : ''}
                        </span>
                    </div>
                    <Button
                        variant="outline"
                        onClick={() => { /* TODO: Implement sign action */ }}
                        className="hidden sm:block text-xs sm:text-sm"
                    >
                        Sign
                    </Button>
                </>
            ) : (
                <Button
                    variant="success"
                    className="font-medium text-xs sm:text-sm w-full sm:w-auto"
                    onClick={handleConnect}
                    disabled={isConnecting}
                >
                    {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </Button>
            )}
        </div>
    );
}